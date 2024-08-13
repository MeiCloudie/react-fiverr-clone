import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./authSlice"
import nguoiDungSlice from "./nguoiDungSlice"

export const store = configureStore({
  reducer: {
    authSlice,
    nguoiDungSlice,
  },
})
