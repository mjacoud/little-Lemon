import { Link } from "react-router-dom";

interface ButtonProps{
    type:string;
    label:string;
    onClick?:()=>void;
    size?:string;
    link?:string;
}
const Button:React.FC<ButtonProps> = ({type,label,size,onClick,link}) => {
    const typeStyle = type =="primary" ? "button--primary" : "button--secondary"
    
    const sizeStyle = size =="large" ? "button--large" : ''
    

  return (
        <Link to={`/${link}`}>
    <button className={`${typeStyle} ${sizeStyle} button`} onClick={onClick}>
        {label}
    </button>
        </Link>
  )
}

export default Button