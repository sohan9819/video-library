import { createSlice } from '@reduxjs/toolkit'
import { VideoType } from '../../utils/Video'

type InitialStateType = {
  loading: true | false
  currentVideo: VideoType
  error: string
}

const initialState: InitialStateType = {
  loading: false,
  currentVideo: {} as VideoType,
  error: '',
}

const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true
      state.currentVideo = {} as VideoType
      state.error = ''
    },
    fetchSuccess: (state, action) => {
      state.loading = false
      state.currentVideo = action.payload
      state.error = ''
    },
    fetchFailure: (state, action) => {
      state.loading = false
      state.currentVideo = {} as VideoType
      state.error = action.payload
    },
    like: (state, action) => {
      if (!state.currentVideo.likes.includes(action.payload)) {
        state.currentVideo.likes.push(action.payload)
        state.currentVideo.dislikes.splice(
          state.currentVideo.dislikes.indexOf(action.payload),
          1
        )
      }
    },
    dislike: (state, action) => {
      if (!state.currentVideo.dislikes.includes(action.payload)) {
        state.currentVideo.dislikes.push(action.payload)
        state.currentVideo.likes.splice(
          state.currentVideo.likes.indexOf(action.payload),
          1
        )
      }
    },
  },
})

export default videoSlice.reducer
export const { fetchStart, fetchSuccess, fetchFailure, like, dislike } =
  videoSlice.actions
export const getCurrentVideo = (state: any) => state.video.currentVideo
