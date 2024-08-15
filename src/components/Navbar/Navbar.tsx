import {useState } from 'react'

import useScreenWidth from '@/hooks/useScreenWidth'

import Logo from '../Logo/Logo'

import menu from '@/assets/icons/menu.png'

import back_arrow from "@/assets/icons/back_arrow.png"
import { Link } from 'react-router-dom'
import Button from '../Button/Button'

const menu_items=[
  "Home",
  "About",
  "Menu",
  "Reservation",
  "Login"   
]

const Navbar = () => {
  const [isMenuOpen,setMenuOpen] = useState<boolean>(false)

  const width = useScreenWidth()

  const handleMenu = () =>{
    setMenuOpen(!isMenuOpen)
  }


  return (
    <nav className='flex navbar__container flex__center'>
      {
      width > 1200 ? <ul className='flex flex__center gap__sm'>
        {menu_items.map((item)=>
          <li key={item}><Link to={`/${item}`} className='DesktopNavbar__item'>{item}</Link></li>
          )}
          <Button label='Reserve a Table' type='secondary'  link='reserve-a-table' />
      </ul> : 
      <div className='flex flex__center'>
        <img src={menu} className='icon' onClick={handleMenu} />
        {isMenuOpen ? 
        <div className='absolut navbar__backdrop'>
          <div className="absolut navbar__menu-background">
             <div className='navbar__mobileMenu-buttons'>
              <img src={back_arrow } alt="close-button" className='icon' onClick={handleMenu} />
            </div> 
            <ul className={isMenuOpen ? "navbar__menu-container" : "display-none"}>
              <Logo type={width > 1200 ? 'primary': "secondary"}/>
               {menu_items.map((item)=>
                <li key={item}><Link to={`/${item}`} className='MobileNavbar__item'>{item}</Link></li>
                )}
                <Button label='Reserve a Table' type='secondary' link='reserve-a-table'/>
            </ul>
          </div>
        </div>: null}

      </div>
      }
    </nav>
  )
}

export default Navbar


