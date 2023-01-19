import { configureStore } from '@reduxjs/toolkit'
import newsReducer from "../features/news/newsSlice"
import NewsDetailsReducer from '../features/news/NewsDetailsSlice'

export const store = configureStore({
  reducer: {
    news: newsReducer,
    newsDetails: NewsDetailsReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
