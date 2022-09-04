import React from 'react'
import { Container, Avatar, Details, Name, Date, Text } from './Comment.styles'

export const Comment = () => {
  return (
    <Container>
      <Avatar src="https://yt3.ggpht.com/YMwULMyrvzEFMOYI38PYfoddFBf7DAbla-KVJmJct5kuFslutvl-Myk1P9H6cQguAO_dyCpvCQ=s48-c-k-c0x00ffffff-no-nd-rj" />
      <Details>
        <Name>
          John Doe <Date>1 day ago</Date>
        </Name>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fuga
          illo officiis id! Ipsam aut, placeat assumenda est rerum similique
          laborum deleniti asperiores nihil voluptates et quis magni sunt ullam!
        </Text>
      </Details>
    </Container>
  )
}
