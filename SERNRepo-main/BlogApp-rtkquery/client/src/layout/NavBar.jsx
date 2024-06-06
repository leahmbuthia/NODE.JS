import './NavBar.scss'
import search from '../assets/search.png'
import notification from '../assets/notification.png'
import avatar from '../assets/Avatar.png'
import chevrondown from '../assets/chevron-down.png'
import NavIcon from '../components/NavIcon'



const NavBar = () => {
    return (
        <div className='navbar'>            
            <div className="nav-body">
                <label className='search'>
                    <input type="text" placeholder="Search" />
                    <NavIcon url={search} />
                </label>
                <div className="nav-body_right">
                    <NavIcon url={notification} />
                    <div className='userAvator'>
                        <NavIcon url={avatar} />
                        <img className='userAvatorImg' src={chevrondown} alt="nopic" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar