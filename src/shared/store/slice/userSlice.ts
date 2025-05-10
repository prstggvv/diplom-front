import { createSlice } from '@reduxjs/toolkit';
import { IUserRegData } from '../../../types/index.ts';

interface IUserState {
  user: IUserRegData | null;
}

const initialState: IUserState = {
  user: null,
};

export const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {
    logout: () => initialState,
    setUser: (state, action) => {
      state.user = { ...state.user, ...action.payload }
    }
  }
});

export default userSlice.reducer;

export const {
  logout,
  setUser,
} = userSlice.actions;