import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./authSlice"
import nguoiDungSlice from "./nguoiDungSlice"
import skillSlice from "./skillSlice"
export const store = configureStore({
  reducer: {
    authSlice,
    nguoiDungSlice,
    skillSlice,
  },
})
