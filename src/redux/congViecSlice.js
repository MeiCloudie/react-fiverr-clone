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

export const getJobDetailApi = createAsyncThunk(
  "congViec/getJobDetailApi",
  async (id, thunkAPI) => {
    const response = await congViecService.getJobDetail(id)
    return response.data.content[0] // Giả sử API trả về một mảng với một đối tượng chi tiết công việc
  }
)

const initialState = {
  listCongViec: [],
  chiTietCongViec: null, 
}

const congViecSlice = createSlice({
  name: "congViec",
  initialState,
  reducers: {
    layChiTietCongViec: (state, action) => {
      state.chiTietCongViec = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getValueJobApi.fulfilled, (state, action) => {
      state.listCongViec = action.payload
    })
    builder.addCase(getJobDetailApi.fulfilled, (state, action) => {
      state.chiTietCongViec = action.payload
    })
  },
})

export const {} = congViecSlice.actions

export default congViecSlice.reducer
