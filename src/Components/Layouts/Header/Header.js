import {Link} from 'react-router-dom'
import { HiOutlineUserCircle, HiOutlineLogout } from "react-icons/hi";
import Style from './Header.module.css'

function Header(){
    return(
        <header className={Style.header}>
            <Link className={Style.iconLink}><HiOutlineUserCircle className={Style.iconHeader}/></Link>
            <h1 className={Style.nameShop}>Coffee</h1>
            <Link to="/login" className={Style.iconLink}><HiOutlineLogout className={Style.iconHeader}/></Link>
        </header>
    )
}

export default Header