import { ObjectId, Int32 } from 'mongodb'

export type UserType = {
  _id: ObjectId
  name: string
  email: string
  img: string
  subscribers: number
  subscribedUsers: string[]
  createdAt: Date
  updatedAt: Date
  __v: Int32
}
