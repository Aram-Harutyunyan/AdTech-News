import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import http from "../../utils/http";

type newsProps = {
  list: Array<string>,
  status: string
}
const initialState: newsProps  = {
  list: [],
  status: ""
}

export const getNews = createAsyncThunk(
  'news/getNews',
  async () => {
    const response = await http.get("news")
    if(response.status === 200){
      return response.data
    }
  }
)

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(getNews.pending, state => {
      return { ...state, status:"pending"}
    }),
    builder.addCase(getNews.fulfilled, (state, {payload}) => {
      return { ...state, list: payload, status:"fulfilled"}
    })
    builder.addCase(getNews.rejected, (state, {payload}) => {
      return { ...state, status:`Rejected ${payload}`}
    })
  },
})

export default newsSlice.reducer