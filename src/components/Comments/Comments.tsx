import { useEffect, useState } from 'react'
import { Container, NewComment, Avatar, Input, Button } from './Comments.styles'
import { Comment } from '../Comment/Comment'
import { CommentType } from '../../utils/Comment'
import axios from 'axios'
import { getCurrentUser } from '../../features/auth/authSlice'
import { useSelector } from 'react-redux'

type CommentsProps = {
  videoId: number
}

export const Comments = ({ videoId }: CommentsProps) => {
  const [comments, setComments] = useState([] as CommentType[])

  const currentUser = useSelector(getCurrentUser)

  const fetchComments = async () => {
    try {
      const res = await axios.get(`/comments/${videoId}`)
      setComments(res.data)
    } catch (_e) {
      const error = _e as Error
      console.error(error.message)
    }
  }

  useEffect(() => {
    fetchComments()
  }, [videoId])

  const handleNewComment = async (evt: React.SyntheticEvent) => {
    evt.preventDefault()
    const target = evt.target as HTMLFormElement
    const comment = target.comment.value.trim()
    if (comment) {
      console.log('Adding the comment')
      try {
        await axios.post('/comments', {
          desc: comment,
          videoId: videoId,
        })
        target.reset()
        fetchComments()
      } catch (_e) {
        const error = _e as Error
        console.error(error.message)
      }
    } else {
      console.log('Comment is empty')
    }
  }

  return (
    <Container>
      {currentUser ? (
        <NewComment onSubmit={handleNewComment}>
          <Avatar src={currentUser?.img} />
          <Input name="comment" placeholder="Add a comment..." />
          <Button type="submit">Comment</Button>
        </NewComment>
      ) : (
        ''
      )}
      {/* <NewComment onSubmit={handleNewComment}>
        <Avatar src={currentUser?.img} />
        <Input name="comment" placeholder="Add a comment..." />
        <Button type="submit">Comment</Button>
      </NewComment> */}
      {comments.map((comment, index) => (
        <Comment key={index} comment={comment} fetchComments={fetchComments} />
      ))}
    </Container>
  )
}
