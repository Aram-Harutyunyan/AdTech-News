import './Newscomment.scss'

type NewsCommentProps = {
  author: string,
  avatar: string,
  createdAt: string,
  id: string,
  newsId: string,
  text: string,
}
const NewsComment = (props:NewsCommentProps) => {
  const {
    author,
    avatar,
    createdAt,
    text
  } = props
  return (
    <div className='NewsComment'>
      <div className='NewsComment-Avatar'>
        <img src={avatar} alt='Avatar' />
      </div>
      <div className='NewsComment-Text'>
        <p>{author}</p>
        <p>{text}</p>
        <p>{createdAt}</p>
      </div>
    </div>
  )
}

export default NewsComment