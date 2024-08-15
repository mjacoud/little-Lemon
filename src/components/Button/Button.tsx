import { Link } from "react-router-dom";

interface ButtonProps{
    type:string;
    label:string;
    onClick?:()=>void;
    link?:string;
}
const Button:React.FC<ButtonProps> = ({type,label,onClick,link}) => {
    const typeStyle = type =="primary" ? "button--primary" : "button--secondary"
    

  return (
        <Link to={`/${link}`}>
    <button className={`${typeStyle} button`} onClick={onClick}>
        {label}
    </button>
        </Link>
  )
}

export default Button