import { Route, Routes } from 'react-router-dom'

import News from './components/News'
import NewsItem from './components/News/NewsItem'

function App() {

  return (
    <Routes>
      <Route path='news/:id' element={<NewsItem />} />
      <Route path='/' element={<News />} />
    </Routes>
  )
}

export default App