import logo from "../../assets/logo/little-lemon-logo.png"
import secondary_logo from "../../assets/logo/secondary-little-lemon-logo.png"
import icon from "../../assets/logo/little-lemon-logo-icon.png"

import "../../App.css"
import { Link } from "react-router-dom"

type LogoType = "primary" | "secondary" | 'icon'

interface ILogo{
  type:LogoType
}

const Logo: React.FC<ILogo> = ({type}) => {
  console.log(type)

  const getLogo = (type:string) => {
    if (type == "primary"){
      return logo
    }
    if (type == "secondary"){
      return secondary_logo
    }
    if (type == "icon"){
      return icon
    }
  }

  return (
        <Link to={'/'}>
        <img src={getLogo(type)} alt="little-lemon-logo" className={type == "icon"? 'footer__logo' : 'navbar__logo'}/>
        </Link>
  )
}

export default Logo