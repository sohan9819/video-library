import { createSlice } from '@reduxjs/toolkit'
import { UserType } from '../../utils/User'

type InitialStateType = {
  loading: true | false
  user: UserType | undefined
  error: string
}

const initialState: InitialStateType = {
  loading: false,
  user: undefined,
  error: '',
}

const authSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true
      state.user = undefined
      state.error = ''
    },
    loginSuccess: (state, action) => {
      state.loading = false
      state.user = action.payload
      state.error = ''
    },
    loginFailure: (state, action) => {
      state.loading = false
      state.user = undefined
      state.error = action.payload
    },
    logout: (state) => {
      state.loading = false
      state.user = undefined
      state.error = ''
    },
    subscribtion: (state, action) => {
      if (state.user?.subscribedUsers.includes(action.payload)) {
        state.user.subscribedUsers.splice(
          state.user.subscribedUsers.findIndex(
            (channelId) => channelId === action.payload
          ),
          1
        )
      } else {
        state.user?.subscribedUsers.push(action.payload)
      }
    },
  },
})

export default authSlice.reducer
export const { loginStart, loginSuccess, loginFailure, logout, subscribtion } =
  authSlice.actions

export const getCurrentUser = (state: any) => state.auth.user
export const getAuthLoadingStatus = (state: any) => state.loading
export const getAuthError = (state: any) => state.error
export const getAuthStatus = (state: any) => {
  return state.user ? true : false
}
