import './sidenav.scss'
import logo from '../../public/todo.svg'
import user from '../assets/user.png'
import menu from '../assets/menu.png'
import Menuitem from '../components/Menuitem'
import bloglist from '../assets/bloglist.png'
import create from '../assets/create.png'
import settings from '../assets/settings.png'
import logout from '../assets/logout.png'
import task from '../assets/task.png'

const SideNav = () => {
    return (
        <div className='sidenav'>
            <div className="top">
                <div className="nav-logo">
                    <img src={logo} alt="nopic" />
                    <h2>Blog</h2>
                </div>
                <div className='sidenav__item'>
                    <Menuitem to='/dashboard' img={menu} txt='Dashboard' />
                </div>
                <div className='sidenav__item'>
                    <Menuitem img={create} txt='Create Blog' />
                    
                </div>
                <div className='sidenav__item'>
                    <Menuitem to='/blogs' img={bloglist} txt='My Blogs' />
                </div>

                <div className='sidenav__item'>
                    <Menuitem to='/other-blogs' img={task} txt='Other Blogs' />
                </div>
                <div className='sidenav__item'>
                    <Menuitem to='/profile' img={user} txt='Profile' />
                </div>
            </div>
            <div className="bottom">
                <div className='sidenav__item'>
                    <Menuitem to='/settings' img={settings} txt='Settings' />
                </div>
                <div className='sidenav__item'>
                    <Menuitem to='/favorites' img={logout} txt='Log Out' />
                </div>
            </div>
        </div>
    )
}

export default SideNav