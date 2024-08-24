import { useState } from "react"
import plus from '../../assets/icons/plus.png'
import minus from '../../assets/icons/minus.png'

export const GuestCounter = () => {
    const [guestNumber,setGuestsNumber] = useState<number>(1)

    const handleGuestNumber = (operation:string) =>{
        if (operation == "sum"){
          if (guestNumber == 6){
            return null
          }
          setGuestsNumber(prevState => prevState + 1)
        }
        if (operation == "minus"){
          if (guestNumber == 1){
            return null
          }
          setGuestsNumber(prevState => prevState -1)
        }
    }
    
  return (
    <>
    <div className="flex background--primary guestCounter__container flex__space-evenly">
      <div className="background--secondary roundCorners flex flex__center" onClick={()=>handleGuestNumber('sum')}>
        <img src={plus} alt="plus" className="icon guestCounter__icon" />
      </div>
      <div className="background--secondary flex flex__center guestNumber roundCorners">{guestNumber}</div>
      <div className="background--secondary roundCorners flex flex__center" onClick={()=>handleGuestNumber('minus')}>
      <img src={minus} alt="minus" className="icon guestCounter__icon" />
        </div>
    </div>
    </>
  )
}
