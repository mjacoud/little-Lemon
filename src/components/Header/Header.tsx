import { Dispatch, SetStateAction } from "react"
import Logo from "../Logo/Logo"
import Navbar from "../Navbar/Navbar"

interface HeaderProps {
  isMenuOpen:boolean
  setMenuOpen:Dispatch<SetStateAction<boolean>>
}

export const Header:React.FC<HeaderProps> = ({isMenuOpen,setMenuOpen}) => {
  return (
    <header className="flex flex__space-between header__container">
        <Logo type="primary"/>
        <Navbar isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen}/>
    </header>
  )
}