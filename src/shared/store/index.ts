import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slice/userSlice";
import { groupSlice } from "./slice/groupSlice";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    groups: groupSlice.reducer,
  },
  middleware:getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false
  })
});

export default store;