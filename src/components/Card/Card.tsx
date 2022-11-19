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
import { UserType } from '../../utils/User'
import { formatter } from '../../utils/utils'

// declare const BASE_URL: string

type CardProps = {
  type?: string
  key?: string | number
  video: VideoType
}

export const Card = ({ type, video }: CardProps) => {
  const [channel, setChannel] = useState<UserType>({} as UserType)

  useEffect(() => {
    const fetchChannel = async () => {
      const res = await axios.get(`/users/find/${video.userId}`)
      setChannel(res.data)
    }
    fetchChannel()
  }, [video.userId])

  // const formatter = Intl.NumberFormat('en', { notation: 'compact' })

  return (
    <Link to={`/video/${video._id}`}>
      <Container typeof={type}>
        <Image typeof={type} src={video.imgUrl} />
        <Details typeof={type}>
          <ChannelImage typeof={type} src={channel.img} />
          <Texts>
            <Title>{video.title}</Title>
            <ChannelName>{channel.name}</ChannelName>
            <Info>
              {formatter(video.views)} views • {format(video.createdAt)}
            </Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  )
}
