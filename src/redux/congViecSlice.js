import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { congViecService } from "../service/congViec.service"

export const getValueJobApi = createAsyncThunk(
  "congViec/getValueJobApi",
  async (_, thunkAPI) => {
    const resolve = await congViecService.getListJob()
    console.log(resolve)
    return resolve.data.content
  }
)

const initialState = {
  listCongViec: [],
}

const congViecSlice = createSlice({
  name: "congViec",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getValueJobApi.fulfilled, (state, action) => {
      state.listCongViec = action.payload
    })
  },
})

export const {} = congViecSlice.actions

export default congViecSlice.reducer
