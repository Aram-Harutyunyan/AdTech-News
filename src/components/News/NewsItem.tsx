import { useNavigate, useParams } from 'react-router-dom'

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
        <img className='NewsContainer-Image' src={image} alt={name} />
        <p>{`Author: ${author}`}</p>
        <p>{`Views: ${views}`}</p>
        <p className='NewsContainer-Description'>{text}</p>
        <p className='NewsContainer-Date'>{`Published: ${createdAt?.slice(0,10)}`}</p>
      </div>
      <button onClick={handleClick}>
          {urlID ? 'Go Back' : 'Details'}
      </button>
    </div>

  )
}

export default NewsItem
