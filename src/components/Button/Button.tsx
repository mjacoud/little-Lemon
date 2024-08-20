import { Link } from "react-router-dom";

interface ButtonProps{
    type:string;
    label:string;
    onClick?:()=>void;
    link?:string;
    size:string
}
const Button:React.FC<ButtonProps> = ({type,label,onClick,link,size}) => {
    const typeStyle = type =="primary" ? "button--primary" : "button--secondary"
    const setSize = size == "small" ? "button--small" : "button--large"

  return (
        <Link to={`/${link}`}>
    <button className={`${typeStyle} button ${setSize}`} onClick={onClick}>
        {label}
    </button>
        </Link>
  )
}

export default Button