import Logo from "../Logo/Logo"
import Navbar from "../Navbar/Navbar"

export const Header = () => {
  return (
    <header className="flex flex__space-between header__container">
        <Logo type="primary"/>
        <Navbar/>
    </header>
  )
}