import { ObjectId, Int32 } from 'mongodb'

export type CommentType = {
  _id: ObjectId
  userId: string
  videoId: string
  desc: string
  createdAt: Date
  updatedAt: Date
  __v: Int32
}
