import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getNews } from '../../features/news/newsSlice'
import NewsItem from './NewsItem'

import './News.scss'

const NewsDetails = () => {
  const newsList = useAppSelector(state => state.news?.list)
  const dispatch = useAppDispatch()
  // const { id } = useParams()
  //const [page, setPage] = useState(1)

  useEffect(() => {
    dispatch(getNews())
  },[])

  return (
    <div className='NewsDetails'>
hi
    </div>
  )
}

export default NewsDetails