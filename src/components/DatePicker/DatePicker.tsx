
import { ReservationProps } from "@/pages/Reservation";
import { DateCard } from "../DateCard/DateCard"

interface DatePickerProps{
  setReservation:React.Dispatch<React.SetStateAction<ReservationProps>>;
  reservation:ReservationProps
}

export const DatePicker:React.FC<DatePickerProps> = ({setReservation,reservation}) => {

const datesArray = Array.from({ length: 7 }, (_, i) => i);

  return (
    <div className="background--primary padding__bottom-md roundCorners margin__xsm">
        <div className="reservation__title text__center">Date</div>
        <div className="flex gap__sm padding__left-sm date__carrossel ">
        {datesArray.map((counter) => (
          <DateCard key={counter} counter={counter} setReservation={setReservation} reservation={reservation}/>
        ))}
        </div>
    </div>
  )
}

