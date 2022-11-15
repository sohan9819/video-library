import { useState, useEffect } from 'react'
import {
  Container,
  Wrapper,
  Close,
  Title,
  Input,
  Desc,
  Button,
  Label,
} from './Upload.styles'
import { MdClose } from 'react-icons/md'
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage'
import app from '../../firebase'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

type UploadProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

type InputsType = {
  title: string
  desc: string
  tags: string[]
  imgUrl: string
  videoUrl: string
}

export const Upload = ({ setOpen }: UploadProps) => {
  const [img, setImg] = useState<File | null>(null)
  const [video, setVideo] = useState<File | null>(null)

  const [imgPerc, setImgPerc] = useState(0)
  const [videoPerc, setVideoPerc] = useState(0)

  const [inputs, setInputs] = useState({} as InputsType)

  const navigate = useNavigate()

  const handleTags = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value.split(','),
    }))
  }

  const handleInputs = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const uploadFile = (file: File, urlType: string) => {
    const storage = getStorage(app)
    const fileName = new Date().getTime() + file.name
    const storageRef = ref(storage, fileName)

    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (
          (snapshot.bytesTransferred / snapshot.totalBytes) *
          100
        ).toFixed(2)
        urlType === 'imgUrl'
          ? setImgPerc(Number(progress))
          : setVideoPerc(Number(progress))
        console.log('Upload is ' + progress + '% done')
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused')
            break
          case 'running':
            console.log('Upload is running')
            break
          default:
            break
        }
      },
      (_e) => {
        // Handle unsuccessful uploads
        const error = _e as Error
        console.log('Error : ', error.message)
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL)
          setInputs((prev) => ({
            ...prev,
            [urlType]: downloadURL,
          }))
        })
      }
    )
  }

  useEffect(() => {
    video && uploadFile(video, 'videoUrl')
  }, [video])

  useEffect(() => {
    img && uploadFile(img, 'imgUrl')
  }, [img])

  const handleUpload = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    const res = await axios.post('/videos', inputs)
    setOpen(false)
    res.status === 200 && navigate(`/video/${res.data._id}`)
  }

  return (
    <Container>
      <Wrapper>
        <Close onClick={() => setOpen(false)}>
          <MdClose />
        </Close>
        <Title>Upload a New Video</Title>
        <Label>Video :</Label>
        {videoPerc > 0 ? (
          `Uploading : ${videoPerc}%`
        ) : (
          <Input
            name="video"
            type="file"
            accept="video/*"
            onChange={(e) => {
              if (e.target.files) {
                setVideo(e.target.files[0])
              }
            }}
          />
        )}
        <Input
          name="title"
          type="text"
          placeholder="Title"
          onChange={(e) => handleInputs(e)}
        />
        <Desc
          name="desc"
          placeholder="Describtion"
          rows={8}
          onChange={(e) => handleInputs(e)}
        />
        <Input
          name="tags"
          type="text"
          placeholder="Separate tags with commas."
          onChange={(e) => handleTags(e)}
        />
        <Label>Image :</Label>
        {imgPerc > 0 ? (
          `Uploading : ${imgPerc}%`
        ) : (
          <Input
            name="image"
            type="file"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files) {
                setImg(e.target.files[0])
              }
            }}
          />
        )}
        <Button onClick={handleUpload}>Upload</Button>
      </Wrapper>
    </Container>
  )
}
