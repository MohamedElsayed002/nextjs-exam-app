

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from '../../app/store'

interface UserState {
  token : string;
  user : {
    email : string;
    firstName : string;
    lastName : string;
    role : string;
    username : string;
  }
}

// Define the initial state using that type
const initialState: UserState = {
  token : '',
  user : {
    email : '',
    firstName : '',
    lastName : '',
    role : '',
    username : ''
  }
}



const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<UserState>) => {
      state.token = action.payload.token
      state.user.email = action.payload.user.email
      state.user.firstName = action.payload.user.firstName
      state.user.lastName = action.payload.user.lastName
      state.user.role = action.payload.user.role
      state.user.username = action.payload.user.username
      localStorage.setItem('token', action.payload.token)
      localStorage.setItem('user', JSON.stringify(action.payload.user))
    },

    logoutUser: (state) => {

    }
  },
})

export const { loginUser, logoutUser } = userSlice.actions
// export const selectCount = (state: RootState) => state.userState.name

export default userSlice.reducer