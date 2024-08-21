import useScreenWidth from "@/hooks/useScreenWidth"
import { Link } from "react-router-dom"
import Logo from "../Logo/Logo"

export const Footer = () => {
    const width = useScreenWidth()

  return (
      <>
      {width < 1200 ? 
        <div className="background--primary footer__container">
            <div className="flex flex__center flex__column gap__sm">
                <h3 className="footer__title">Navigation</h3>
                <Link className="footer__link" to={""}>Home</Link>
                <Link className="footer__link" to={""}>About</Link>
                <Link className="footer__link" to={""}>Menu</Link>
                <Link className="footer__link" to={""}>Reservations</Link>
                <Link className="footer__link" to={""}>Order Online</Link>
                <Link className="footer__link" to={""}>Login</Link>
            </div>
            <div className="flex flex__center flex__column gap__sm">
                <h3 className="footer__title">Contact</h3>
                <Link className="footer__link" to={""}>Address</Link>
                <Link className="footer__link" to={""}>Phone Number</Link>
                <Link className="footer__link" to={""}>Email Address</Link>
            </div>
            <div className="flex flex__center flex__column gap__sm">
                <h3 className="footer__title">Social Media</h3>
                <Link className="footer__link" to={""}>Facebook</Link>
                <Link className="footer__link" to={""}>Instagram</Link>
                <Link className="footer__link" to={""}>Whatsapp</Link>
            <Logo type={width < 1200 ? 'icon': "secondary"}/>
            </div>
         </div>
        :
        
        <div className="background--primary footer__container flex">
        <div className="flex flex__center flex__column gap__sm">
        <h3 className="footer__title">Navigation</h3>
        <Link className="footer__link" to={""}>Home</Link>
        <Link className="footer__link" to={""}>About</Link>
        <Link className="footer__link" to={""}>Menu</Link>
        <Link className="footer__link" to={""}>Reservations</Link>
        <Link className="footer__link" to={""}>Order Online</Link>
        <Link className="footer__link" to={""}>Login</Link>
            </div>
            <div className="flex flex__center flex__column gap__sm">
                <h3 className="footer__title">Contact</h3>
                <Link className="footer__link" to={""}>Address</Link>
                <Link className="footer__link" to={""}>Phone Number</Link>
                <Link className="footer__link" to={""}>Email Address</Link>
                </div>
                <div className="flex flex__center flex__column gap__sm">
                <h3 className="footer__title">Social Media</h3>
                <Link className="footer__link" to={""}>Facebook</Link>
                <Link className="footer__link" to={""}>Instagram</Link>
                <Link className="footer__link" to={""}>Whatsapp</Link>
                <Logo type={width < 1200 ? 'icon': "secondary"}/>
                </div>
                </div>
                
            }
            </>
            
        )
    }
    