import './menuitem.scss'
import { NavLink } from 'react-router-dom'
const Menuitem = ({ to, img, txt, number }) => {
    return (
        <NavLink to={to} className='menuitem'>
            <img src={img} alt="nopic" />
            <p>{txt}</p>
        </NavLink>
    )
}

export default Menuitem;