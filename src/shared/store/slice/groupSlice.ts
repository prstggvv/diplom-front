import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGroup } from '../../../types/index';

interface GroupState {
  groups: IGroup[];
}

const initialState: GroupState = {
  groups: [],
};

export const groupSlice = createSlice({
  initialState,
  name: 'group',
  reducers: {
    setGroups(state, action: PayloadAction<IGroup[]>) {
      state.groups = action.payload;
    },
    addGroup(state, action: PayloadAction<IGroup>) {
      state.groups.push(action.payload);
    },
  },
});

export const { 
  setGroups,
  addGroup,
} = groupSlice.actions;
export default groupSlice.reducer;