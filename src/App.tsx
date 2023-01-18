import { Route, Routes } from 'react-router-dom'

import News from './components/News'
import NewsDetail from './components/News/NewsDetail'

import './App.css'

function App() {

  return (
    <Routes>
      <Route path='/news/:id' element={<NewsDetail />} />
      <Route path='/' element={<News />} />
    </Routes>
  )
}

export default App