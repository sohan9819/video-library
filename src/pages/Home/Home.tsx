import { useEffect, useState } from 'react'
import { Container } from './Home.styles'
import { Card, Category } from '../../components'
import { VideoType } from '../../utils/Video'
import axios from 'axios'

type HomeProps = {
  type: string
}

export const Home = ({ type }: HomeProps) => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`/videos/${type}`)
      setVideos(res.data)
    }

    fetchVideos()
  }, [type])

  return (
    <>
      <Category />
      <Container>
        {videos.map((video: VideoType) => (
          <Card key={String(video._id)} video={video} />
        ))}
      </Container>
    </>
  )
}
