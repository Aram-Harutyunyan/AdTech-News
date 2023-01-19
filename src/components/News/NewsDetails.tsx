import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getNewsDetails, getNewsComments } from '../../features/news/NewsDetailsSlice'
import NewsComments from './NewsComment'

import './NewsDetails.scss'
import NewsItem from './NewsItem'

const NewsDetails = () => {
  const {selectedNews, comments} = useAppSelector((state:any) => state.newsDetails)
  const dispatch = useAppDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(getNewsDetails(id))
    dispatch(getNewsComments(id))
  },[id])

  return (
    <div className='NewsDetails'>
      <div className='NewsDetails-Item'>
        <NewsItem {...selectedNews} />
      </div>
      <div className='NewsDetails-Comments'>
        <p className='NewsDetails-Header'>
          Comments
        </p>
        {comments?.map((comment:any) =>(
          <NewsComments {...comment} key={comment?.id} />
        ))}
      </div>
    </div>
  )
}

export default NewsDetails
