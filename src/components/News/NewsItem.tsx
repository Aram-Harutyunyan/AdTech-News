import { useNavigate, useParams } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import './NewsItem.scss'

type NewsItemProps = {
  author: string,
  createdAt: string,
  id: string,
  image: string,
  name: string,
  text: string,
  views: string,
}
const NewsItem = (props:NewsItemProps) => {
  const {
    author,
    createdAt,
    id,
    image,
    name,
    text,
    views
  } = props
  const navigate = useNavigate()
  const { id: urlID } = useParams()

  const handleClick = () => {
    const redirectPath = urlID ? '/' : `news/${id}`
    navigate(redirectPath)
  }

  return (
    <div className='NewsContainer'>
      <div className='NewsContainer-Item'>
        <LazyLoadImage
          effect='blur'
          className='NewsContainer-Image'
          width='100%'
          src={image}
          placeholderSrc='/img/loading.png'
        />
        <p>{`Author: ${author}`}</p>
        <p>{`Views: ${views}`}</p>
        <p className='NewsContainer-Date'>{`Published: ${createdAt?.slice(0,10)}`}</p>
        <p className='NewsContainer-Description'>{text}</p>
      </div>
      <button onClick={handleClick}>
          {urlID ? 'Go Back' : 'Details'}
      </button>
    </div>

  )
}

export default NewsItem
