import useScreenWidth from "@/hooks/useScreenWidth";
import { ReservationProps } from "@/pages/Reservation";

interface TimePickerProps{
    setReservation:React.Dispatch<React.SetStateAction<ReservationProps>>;
    reservation:ReservationProps
  }

export const TimePicker:React.FC<TimePickerProps> = ({setReservation,reservation}) => {

    const width = useScreenWidth()
    const reservationHour = new Date()
    reservationHour.setHours(reservation.hours,reservation.minutes)
    const cardStyle = (hours:number,minutes:number) => `${reservation.hours == hours && reservation.minutes == minutes ?'time__card--active' : 'time__card' } roundCorners`
    
    const handleTime =(hour:number,minutes:number) =>{
        reservationHour.setHours(hour,minutes)
        
        setReservation({...reservation,
            hours:reservationHour.getHours(),
            minutes:reservationHour.getMinutes()
        })
    }
    

  return (
    <div>
        {width < 768 ?
            <div className="background--primary padding__bottom-md roundCorners margin__xsm">
            <div className="reservation__title text__center">Time</div>
            <div className="flex flex__column gap__sm time__container">
                <div className="flex gap__sm padding__left-sm flex__center">
                    <div className={cardStyle(17,30)} onClick={()=>handleTime(17,30)}>
                        <p>17:30</p>
                    </div>
                    <div className={cardStyle(18,0)} onClick={()=>handleTime(18,0)}>
                        <p>18:00</p>
                    </div>
                    <div className={cardStyle(18,30)} onClick={()=>handleTime(18,30)}>
                        <p>18:30</p>
                    </div>
                </div>
                <div className="flex gap__sm padding__left-sm flex__center">
                    <div className={cardStyle(19,0)} onClick={()=>handleTime(19,0)}>
                        <p>19:00</p>
                    </div>
                    <div className={cardStyle(19,30)} onClick={()=>handleTime(19,30)}>
                        <p>19:30</p>
                    </div>
                    <div className={cardStyle(20,0)} onClick={()=>handleTime(20,0)}>
                        <p>20:00</p>
                    </div>
                </div>
                <div className="flex gap__sm padding__left-sm flex__center">
                    <div className={cardStyle(21,0)} onClick={()=>handleTime(20,30)}>
                        <p>21:00</p>
                    </div>
                    <div className={cardStyle(21,30)} onClick={()=>handleTime(21,30)}>
                        <p>21:30</p>
                    </div>
                    <div className={cardStyle(22,0)} onClick={()=>handleTime(22,0)}>
                        <p>22:00</p>
                    </div>
                </div>
                <div className="flex gap__sm padding__left-sm flex__center">
                    <div className={cardStyle(22,30)} onClick={()=>handleTime(22,30)}>
                        <p>22:30</p>
                    </div>
                    <div className={cardStyle(23,0)} onClick={()=>handleTime(23,0)}>
                        <p>23:00</p>
                    </div>
                    <div className={cardStyle(23,30)} onClick={()=>handleTime(23,30)}>
                        <p>23:30</p>
                    </div>
                </div>
            </div>
        </div> :
        <div>
             <div className={`background--primary padding__bottom-md roundCorners ${width < 766 ? 'margin__xsm': width < 1023 ?  'margin__sm' : 'container--desktop' }`}>
            <div className="reservation__title text__center">Time</div>
            <div className="flex flex__column gap__sm time__container">
                <div className="flex gap__sm padding__left-sm flex__center">
                    <div className={cardStyle(17,30)} onClick={()=>handleTime(17,30)}>
                        <p>17:30</p>
                    </div>
                    <div className={cardStyle(18,0)} onClick={()=>handleTime(18,0)}>
                        <p>18:00</p>
                    </div>
                    <div className={cardStyle(18,30)} onClick={()=>handleTime(18,30)}>
                        <p>18:30</p>
                    </div>
              
                    <div className={cardStyle(19,0)} onClick={()=>handleTime(19,0)}>
                        <p>19:00</p>
                    </div>
                    <div className={cardStyle(19,30)} onClick={()=>handleTime(19,30)}>
                        <p>19:30</p>
                    </div>
                    <div className={cardStyle(20,0)} onClick={()=>handleTime(20,0)}>
                        <p>20:00</p>
                    </div>
                </div>
                <div className="flex gap__sm padding__left-sm flex__center">
                    <div className={cardStyle(21,0)} onClick={()=>handleTime(20,30)}>
                        <p>21:00</p>
                    </div>
                    <div className={cardStyle(21,30)} onClick={()=>handleTime(21,30)}>
                        <p>21:30</p>
                    </div>
                    <div className={cardStyle(22,0)} onClick={()=>handleTime(22,0)}>
                        <p>22:00</p>
                    </div>
            
                    <div className={cardStyle(22,30)} onClick={()=>handleTime(22,30)}>
                        <p>22:30</p>
                    </div>
                    <div className={cardStyle(23,0)} onClick={()=>handleTime(23,0)}>
                        <p>23:00</p>
                    </div>
                    <div className={cardStyle(23,30)} onClick={()=>handleTime(23,30)}>
                        <p>23:30</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
        }
    </div>
  )
}

