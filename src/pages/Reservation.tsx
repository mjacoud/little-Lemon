import { Link } from "react-router-dom"
import back_arrow from '../assets/icons/green_back_arrow.png'

export const Reservation = () => {
  return (
    <header className="flex reservation__title">
      <Link to={"/.."}>
      <img src={back_arrow} alt="back-arrow" className="icon"/>
      </Link>
      <h2>
        Reservation Details
      </h2>
    </header>
  )
}

