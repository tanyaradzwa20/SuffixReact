import React, {useState} from 'react'
import MenuItem from "./MenuItem"
import './Navbar.css'

function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);
    const handleClick = () =>{
        setOpenMenu(!openMenu)
    }
    return (
        <div>
            <nav className="NavbarItem">
            <img src={process.env.PUBLIC_URL + '/Mambos-images/logo.png'} alt="logo"/>
            <i className="fas fa-bars"></i>
            <a className="menu-icon" onClick={handleClick}>
                <i className={openMenu ? 'fas fa-bars' : 'fas fa-times'}></i>
            </a>
                <ul>
                   {MenuItem.map((Item, index) =>{
                       return(
                        <li key={index}>
                           <a className={Item.cName} href={Item.url}>{Item.title} </a></li>
                       )
                   })}
               </ul>
           </nav>
        </div>
    )
}




export default Navbar;