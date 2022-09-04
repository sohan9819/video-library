import React from 'react'
import { Container, NewComment, Avatar, Input } from './Comments.styles'
import { Comment } from '../Comment/Comment'

export const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar src="https://yt3.ggpht.com/YMwULMyrvzEFMOYI38PYfoddFBf7DAbla-KVJmJct5kuFslutvl-Myk1P9H6cQguAO_dyCpvCQ=s48-c-k-c0x00ffffff-no-nd-rj" />
        <Input placeholder="Add a comment..." />
      </NewComment>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </Container>
  )
}
