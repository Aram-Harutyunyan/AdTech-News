import { Link } from 'react-router-dom'
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

  return (
    <div className='NewsItem'>
      <img className='NewsItem-Image' src={image} alt={name} />
      <p>{`Author: ${author}`}</p>
      <p>{`Views: ${views}`}</p>
      <p className='NewsItem-Description'>{text}</p>
      <p className='NewsItem-Date'>{`Published: ${createdAt.slice(0,10)}`}</p>
      <button>
        <Link to={`/news/${id}`}>Details</Link>
      </button>
    </div>
  )
}

export default NewsItem