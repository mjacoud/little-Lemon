import logo from "../../assets/logo/little-lemon-logo.png"
import secondary_logo from "../../assets/logo/secondary-little-lemon-logo.png"

import "../../App.css"
import { Link } from "react-router-dom"

type LogoType = "primary" | "secondary"

interface ILogo{
  type:LogoType
}

const Logo: React.FC<ILogo> = ({type}) => {
  return (
        <Link to={'/'}>
        <img src={type == 'secondary'? secondary_logo : logo } alt="little-lemon-logo" className="navbar__logo"/>
        </Link>
  )
}

export default Logo