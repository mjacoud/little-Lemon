import logo from "../../assets/logo/little-lemon-logo.png"
import secondary_logo from "../../assets/logo/secondary-little-lemon-logo.png"

import "../../App.css"

type LogoType = "primary" | "secondary"

interface ILogo{
  type:LogoType
}

const Logo: React.FC<ILogo> = ({type}) => {
  return (
        <img src={type == 'primary' ? logo : secondary_logo } alt="little-lemon-logo" className="navbar__logo"/>
  )
}

export default Logo