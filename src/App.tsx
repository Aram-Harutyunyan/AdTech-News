import { Route, Routes } from 'react-router-dom'

import News from './components/News'
import NewsDetails from './components/News/NewsDetails'

import './App.css'

function App() {

  return (
    <Routes>
      <Route path='/news/:id' element={<NewsDetails />} />
      <Route path='/' element={<News />} />
    </Routes>
  )
}

export default App