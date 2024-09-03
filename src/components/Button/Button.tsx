import { Link } from "react-router-dom";

interface ButtonProps{
    style:string;
    label:string;
    onClick?:()=>void;
    link?:string;
    size:string
    type?: "submit" | "button" |"reset"
}
const Button:React.FC<ButtonProps> = ({style,label,onClick,link,size,type}) => {
    const typeStyle = style =="primary" ? "button--primary" : "button--secondary"
    const setSize = size == "small" ? "button--small" : "button--large"
    const linkExist = link ? 
    <Link to={`/${link}`}>
    <button className={`${typeStyle} button ${setSize}`} onClick={onClick}>
        {label}
    </button>
        </Link>
    : 
    <button type={type} className={`${typeStyle} button ${setSize}`} onClick={onClick}>
        {label}
    </button>
    

  return (
    <>
       {linkExist}
    </>
  )
}

export default Button