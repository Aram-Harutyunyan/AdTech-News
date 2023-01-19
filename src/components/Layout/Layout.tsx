
import Navbar from '../Navbar/Navbar'
import './Layout.scss'

type LayoutProps = {
  children: React.ReactNode
}
const Layout = ({children}: LayoutProps) => {
  return (
    <div className='Layout'>
      <Navbar />
      {children}
    </div>
  )
}

export default Layout
