import {  useEffect } from 'react'
import { useParams } from 'react-router-dom'
import NewsItem from './NewsItem'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getNews } from '../../features/news/newsSlice'

import './News.scss'

const NewsPage = () => {
  const newsList = useAppSelector(state => state.news?.list)
  const dispatch = useAppDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(getNews())
  },[id])

  return (
    <div className='NewsPage'>
      {newsList.map((item:any) => (
        <NewsItem key={item.id} {...item} />
      ))}
    </div>
  )
}

export default NewsPage
