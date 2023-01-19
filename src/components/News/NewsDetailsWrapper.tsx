import { useParams } from 'react-router-dom';
import NewsDetails from './NewsDetails';

const Wrapper = () => {
  const { id } = useParams();

  return <NewsDetails key={id} />
}

export default Wrapper