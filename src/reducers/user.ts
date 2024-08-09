import { createSlice } from '@reduxjs/toolkit'

export const userStore = createSlice({
  name: 'userStore',
  initialState: {
    user: {},
    token: ''
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action
    },
    setToken: (state, action) => {
      state.token = action.payload
    },
    deleteStore: (state) => {
      state.user = {}
      state.token = ''
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUser, setToken, deleteStore } = userStore.actions

export default userStore.reducer