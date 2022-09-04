import React from 'react'
import {
  Container,
  Content,
  Recommendation,
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
  MdThumbDownOffAlt,
  MdOutlineAddTask,
} from 'react-icons/md'
import { RiShareForwardLine } from 'react-icons/ri'
import { Comments, Card } from '../../components'

export const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          {/* <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/50VNCymT-Cs"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe> */}
          <VideoPlayer
            src="https://www.youtube.com/embed/50VNCymT-Cs"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></VideoPlayer>
          <Title>
            Alec Benjamin - Let Me Down Slowly [Official Music Video]
          </Title>
          <Details>
            <Info>406,646,962 views • Jun 2018</Info>
            <Buttons>
              <Button>
                <MdThumbUpOffAlt /> 2.9M
              </Button>
              <Button>
                <MdThumbDownOffAlt /> Dislike
              </Button>
              <Button>
                <RiShareForwardLine /> Share
              </Button>
              <Button>
                <MdOutlineAddTask /> Save
              </Button>
            </Buttons>
          </Details>
        </VideoWrapper>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src="https://yt3.ggpht.com/YMwULMyrvzEFMOYI38PYfoddFBf7DAbla-KVJmJct5kuFslutvl-Myk1P9H6cQguAO_dyCpvCQ=s48-c-k-c0x00ffffff-no-nd-rj" />
            <ChannelDetail>
              <ChannelName>Alec Benjamin</ChannelName>
              <ChannelCounter>4.36M subscribers</ChannelCounter>
              <Description>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Assumenda, perferendis non alias inventore reprehenderit odit
                quisquam modi odio soluta nobis magni deserunt quibusdam
                consectetur, quos, aspernatur sit nesciunt nemo numquam
              </Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>Subscribe</Subscribe>
        </Channel>
        <Hr />
        <Comments />
      </Content>
      <Recommendation>
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
      </Recommendation>
    </Container>
  )
}
