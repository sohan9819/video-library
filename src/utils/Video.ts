import { ObjectId, Int32 } from 'mongodb'

export type VideoType = {
  _id: ObjectId
  userId: string
  title: string
  desc: string
  imgUrl: string
  videoUrl: string
  views: number
  tags: string[]
  likes: string[]
  dislikes: string[]
  createdAt: Date
  updatedAt: Date
  __v: Int32
}
