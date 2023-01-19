import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import http from "../../utils/http";

type newsProps = {
  selectedNews: object,
  status: string,
  comments: object,
  commentStatus: string,
}
const initialState: newsProps  = {
  selectedNews: {},
  status: "",
  comments: {},
  commentStatus: "",
}

export const getNewsDetails = createAsyncThunk(
  'news/getNewsDetails',
  async (id: string | undefined) => {
    const response = await http.get(`/news/${id}`)
    if(response.status === 200){
      return response.data
    }
  }
)

export const getNewsComments = createAsyncThunk(
  'news/getNewsComments',
  async (id: string | undefined) => {
    const response = await http.get(`/news/${id}/comments`)
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
    }),
    builder.addCase(getNewsDetails.rejected, (state, {payload}) => {
      return { ...state, status:`Rejected ${payload}`}
    }),
    builder.addCase(getNewsComments.pending, state => {
      return { ...state, commentStatus:"pending"}
    }),
    builder.addCase(getNewsComments.fulfilled, (state, {payload}) => {
      return { ...state, comments: payload, commentStatus:"fulfilled"}
    }),
    builder.addCase(getNewsComments.rejected, (state, {payload}) => {
      return { ...state, commentStatus:`Rejected ${payload}`}
    })
  },
})

export default NewsDetailsSlice.reducer