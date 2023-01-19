import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getNewsDetails, getNewsComments } from '../../features/news/NewsDetailsSlice'
import NewsItem from './NewsItem'

import './News.scss'

const NewsDetails = () => {
  const newsList = useAppSelector(state => state.news?.list)
  const dispatch = useAppDispatch()
  const { id } = useParams()
  //const [page, setPage] = useState(1)

  useEffect(() => {
    dispatch(getNewsDetails(id))
    dispatch(getNewsComments(id))
  },[id])

  return (
    <div className='NewsDetails'>
hi
    </div>
  )
}

export default NewsDetails