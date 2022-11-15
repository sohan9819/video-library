import { useState, useEffect } from 'react'
import {
  Container,
  Avatar,
  Details,
  Name,
  Date,
  Text,
  Button,
  Actions,
} from './Comment.styles'
import { CommentType } from '../../utils/Comment'
import { UserType } from '../../utils/User'
import axios from 'axios'
import { format } from 'timeago.js'
import { getCurrentUser } from '../../features/auth/authSlice'
import { useSelector } from 'react-redux'

type CommentProps = {
  key: number
  comment: CommentType
  fetchComments: () => Promise<void>
}

export const Comment = ({ comment, fetchComments }: CommentProps) => {
  const [channel, setChannel] = useState({} as UserType)
  const currentUser = useSelector(getCurrentUser)

  useEffect(() => {
    const fetchChannel = async () => {
      const res = await axios.get(`/users/find/${comment.userId}`)
      setChannel(res.data)
    }
    fetchChannel()
  }, [comment.userId])

  const handleDeleteComment = async () => {
    try {
      await axios.delete(`/comments/${comment._id}`)
      fetchComments()
    } catch (_e) {
      const error = _e as Error
      console.error(error.message)
    }
  }

  return (
    <Container>
      <Avatar src={channel?.img} />
      <Details>
        <Name>
          {channel?.name} <Date>{format(comment.createdAt)}</Date>
        </Name>
        <Text>{comment.desc}</Text>
      </Details>
      {comment.userId === currentUser._id ? (
        <Actions>
          {' '}
          {/* <Button variant="edit">Edit</Button> */}
          <Button variant="delete" onClick={handleDeleteComment}>
            Delete
          </Button>
        </Actions>
      ) : (
        ''
      )}
    </Container>
  )
}
