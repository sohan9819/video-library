import { useState, useEffect } from 'react'
import {
  Container,
  Image,
  Details,
  ChannelImage,
  Texts,
  Title,
  ChannelName,
  Info,
} from './Card.styles'
import { VideoType } from '../../utils/Video'
import { Link } from 'react-router-dom'
import { format } from 'timeago.js'
import axios from 'axios'
import { ChannelType } from '../../utils/User'

type CardProps = {
  type?: string
  key?: string
  video: VideoType
}

export const Card = ({ type, video }: CardProps) => {
  const [channel, setChannel] = useState({} as ChannelType)

  useEffect(() => {
    const fetchChannel = async () => {
      const res = await axios.get(`/users/find/${video.userId}`)
      setChannel(res.data)
    }
    fetchChannel()
  }, [video.userId])

  const formatter = Intl.NumberFormat('en', { notation: 'compact' })

  return (
    <Link to={'/video/test'}>
      <Container typeof={type}>
        <Image typeof={type} src={video.imgUrl} />
        <Details typeof={type}>
          <ChannelImage typeof={type} src={channel.img} />
          <Texts>
            <Title>{video.title}</Title>
            <ChannelName>{channel.name}</ChannelName>
            <Info>
              {formatter.format(10000)} views • {format(video.createdAt)}
            </Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  )
}
