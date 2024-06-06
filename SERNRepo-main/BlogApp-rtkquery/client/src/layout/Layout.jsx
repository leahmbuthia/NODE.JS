import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import SideNav from './SideNav'
import './Layout.scss'

const Layout = () => {
    return (
        <div className='layout'>
            <div className="side">
                <SideNav />
            </div>
            <div className='main'>
                <NavBar />
                <Outlet />
            </div>
        </div>
    )
}

export default Layout