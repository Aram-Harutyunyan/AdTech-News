import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import http from "../../utils/http";

type newsProps = {
  selectedNews: Array<object>,
  status: string
}
const initialState: newsProps  = {
  selectedNews: [],
  status: ""
}

export const getNewsDetails = createAsyncThunk(
  'news/getNewsDetails',
  async (id:string) => {
    const response = await http.get(`/news/${id}`)
    if(response.status === 200){
      return response.data
    }
  }
)

export const NewsDetailsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(getNewsDetails.pending, state => {
      return { ...state, status:"pending"}
    }),
    builder.addCase(getNewsDetails.fulfilled, (state, {payload}) => {
      return { ...state, selectedNews: payload, status:"fulfilled"}
    })
    builder.addCase(getNewsDetails.rejected, (state, {payload}) => {
      return { ...state, status:`Rejected ${payload}`}
    })
  },
})

export default NewsDetailsSlice.reducer