
import plus from '../../assets/icons/plus.png'
import minus from '../../assets/icons/minus.png'
import { ReservationProps } from "@/pages/Reservation"

interface GuestCounterProps{
  setReservation:React.Dispatch<React.SetStateAction<ReservationProps>>;
  reservation:ReservationProps
}

export const GuestCounter:React.FC<GuestCounterProps> = ({setReservation,reservation}) => {

  const handleGuestNumber = (operation: string) => {
    setReservation((prevState:ReservationProps) => {
        let newGuests = prevState.guests;

        if (operation === "sum") {
            if (newGuests < 6) {
                newGuests += 1;
            }
        } else if (operation === "minus") {
            if (newGuests > 1) {
                newGuests -= 1;
            }
        }

        return { ...prevState, guests: newGuests };
    });
}

  return (
    <>

    <div className="flex flex__column flex__center background--primary guestCounter__container">
      <h3 className="reservation__title">Guest</h3>
      <div>
        <div className="flex background--primary guestCounter__container flex__space-evenly">
          <div className="background--secondary roundCorners flex flex__center" onClick={()=>handleGuestNumber('minus')}>
          <img src={minus} alt="minus" className="icon guestCounter__icon" />
        </div>
          <div className="flex flex__center guestNumber roundCorners">{reservation.guests}</div>
          <div className="background--secondary roundCorners flex flex__center" onClick={()=>handleGuestNumber('sum')}>
            <img src={plus} alt="plus" className="icon guestCounter__icon" />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
