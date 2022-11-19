import { useState, useEffect } from 'react'
import {
  Container,
  Content,
  VideoWrapper,
  Title,
  Details,
  Info,
  Buttons,
  Button,
  Hr,
  ChannelInfo,
  Subscribe,
  Channel,
  Image,
  ChannelDetail,
  ChannelCounter,
  ChannelName,
  Description,
  VideoPlayer,
} from './Video.styles'
import {
  MdThumbUpOffAlt,
  MdThumbUp,
  MdThumbDownOffAlt,
  MdThumbDown,
  MdOutlineAddTask,
} from 'react-icons/md'
import { RiShareForwardLine } from 'react-icons/ri'
import { Comments, Recommendation } from '../../components'
import { getCurrentUser, subscribtion } from '../../features/auth/authSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { UserType } from '../../utils/User'
import {
  fetchSuccess,
  getCurrentVideo,
  like,
  dislike,
} from '../../features/video/videoSlice'
import { formatter } from '../../utils/utils'
import { format } from 'timeago.js'

// declare const BASE_URL: string

export const Video = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector(getCurrentUser)
  const currentVideo = useSelector(getCurrentVideo)

  const { videoId } = useParams()
  console.log('videoId : ', videoId)

  const [channel, setChannel] = useState({} as UserType)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const videoRes = await axios.get(`/videos/find/${videoId}`)
        const channelRes = await axios.get(
          `/users/find/${videoRes.data.userId}`
        )
        dispatch(fetchSuccess(videoRes.data))
        setChannel(channelRes.data)
        // console.log('Fetch Complete')
      } catch (_e) {
        const error = _e as Error
        console.log(error.message)
        // console.log('!!!!!!! Fetch Error !!!!!!!!')
      }
    }
    fetchData()
  }, [videoId, dispatch])

  const handleLike = async () => {
    await axios.put(`/users/like/${videoId}`)
    dispatch(like(currentUser?._id))
  }
  const handleDislike = async () => {
    await axios.put(`/users/dislike/${videoId}`)
    dispatch(dislike(currentUser?._id))
  }

  const handleSub = async () => {
    await axios.put(`/users/sub/${channel._id}`)
    dispatch(subscribtion(channel._id))
  }

  const handleUnsub = async () => {
    await axios.put(`/users/unsub/${channel._id}`)
    dispatch(subscribtion(channel._id))
  }

  return (
    <Container>
      <Content>
        <VideoWrapper>
          <VideoPlayer src={currentVideo.videoUrl} controls />
          <Title>{currentVideo.title}</Title>
          <Details>
            <Info>
              {formatter(currentVideo.views)} views •{' '}
              {format(currentVideo.createdAt)}
            </Info>
            {currentUser ? (
              <Buttons>
                <Button onClick={handleLike}>
                  {currentVideo.likes?.includes(currentUser?._id) ? (
                    <MdThumbUp />
                  ) : (
                    <MdThumbUpOffAlt />
                  )}
                  {formatter(currentVideo.likes?.length)}
                </Button>
                <Button onClick={handleDislike}>
                  {currentVideo.dislikes?.includes(currentUser?._id) ? (
                    <MdThumbDown />
                  ) : (
                    <MdThumbDownOffAlt />
                  )}{' '}
                  Dislike
                </Button>
                <Button>
                  <RiShareForwardLine /> Share
                </Button>
                <Button>
                  <MdOutlineAddTask /> Save
                </Button>
              </Buttons>
            ) : (
              <Buttons>
                <Button>
                  <MdThumbUpOffAlt /> {formatter(currentVideo.likes?.length)}
                </Button>
                <Button onClick={handleDislike}>
                  <MdThumbDownOffAlt />
                  Dislike
                </Button>
                <Button>
                  <RiShareForwardLine /> Share
                </Button>
                <Button>
                  <MdOutlineAddTask /> Save
                </Button>
              </Buttons>
            )}
          </Details>
        </VideoWrapper>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src={channel.img} />
            <ChannelDetail>
              <ChannelName>{channel.name}</ChannelName>
              <ChannelCounter>
                {formatter(channel.subscribers)} subscribers
              </ChannelCounter>
              <Description>{currentVideo.desc}</Description>
            </ChannelDetail>
          </ChannelInfo>

          {currentUser?.subscribedUsers?.includes(channel._id) ? (
            <Subscribe subscribed onClick={handleUnsub}>
              {' '}
              SUBSCRIBED{' '}
            </Subscribe>
          ) : (
            <Subscribe onClick={handleSub}> SUBSCRIBE </Subscribe>
          )}
        </Channel>
        <Hr />
        <Comments videoId={currentVideo._id} />
      </Content>
      <Recommendation tags={currentVideo.tags} />
    </Container>
  )
}
