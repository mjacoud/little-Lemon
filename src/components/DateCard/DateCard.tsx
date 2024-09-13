import { ReservationProps } from "@/pages/Reservation";

interface dateCardProps {
    counter:number
    setReservation:React.Dispatch<React.SetStateAction<ReservationProps>>;
    reservation:ReservationProps
}

const weekDay = ['Sun', 'Mon', 'Tues', 'Wen', 'Thu', 'Fri', 'Sat']

const month: { [key: number]: string } = {
  0: 'Jan',
  1: 'Feb',
  2: 'Mar',
  3: 'Apr',
  4: 'May',
  5: 'Jun',
  6: 'Jul',
  7: 'Ago',
  8: 'Set',
  9: 'Out',
  10: 'Nov',
  11: 'Dez',
}

export const DateCard:React.FC<dateCardProps> = ({counter,setReservation,reservation}) => {

const dateObject = new Date()
const currentWeekday = dateObject.getDay()
const currentMonth = dateObject.getMonth()
const currentDay = dateObject.getDate()

const futureDate = new Date(dateObject); 
futureDate.setDate(dateObject.getDate() + counter);

  const handleWeekDay = () =>{
    if (counter == 0 ){
        return 'Today'
    }
    if (currentWeekday <= 6 && currentWeekday+counter > 6){
        return weekDay[counter+currentWeekday-7]
    }
    if (currentWeekday+counter){
        return weekDay[currentWeekday+counter]
    } 
    else{
        return weekDay[currentWeekday]
    }
  }

  const handleDay = () => {
    const is31DayMonth = currentMonth === 0 || currentMonth === 2 || currentMonth === 4 || 
                         currentMonth === 6 || currentMonth === 7 || currentMonth === 9 || currentMonth === 11;

    const is30DayMonth = currentMonth === 3 || currentMonth === 5 || currentMonth === 8 || currentMonth === 10;

    const isFebruary = currentMonth === 1;

    const totalDays = currentDay + counter;

    if (is31DayMonth && totalDays > 31) {
        return totalDays - 31;
    } else if (is30DayMonth && totalDays > 30) {
        return totalDays - 30;
    } else if (isFebruary && totalDays > 28) {
        return totalDays - 28;
    } else {
        return totalDays;
    }
}

const handleMonth = () => {
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let newMonth = currentMonth;

    if (currentDay + counter > daysInMonth[currentMonth]) {
        newMonth++;

        if (newMonth > 11) {
            newMonth = 0;
        }
    }
    return month[newMonth];
}

const handleDateSelection = (day:Date) =>{
    setReservation({...reservation,day:day})
}


  return (
        <div onClick={()=>handleDateSelection(futureDate)} className={` ${reservation.day.getDate() == futureDate.getDate() ?'date__card--active' : 'date__card' } flex flex__center flex__column gap__sm`}>
            <div className="date__cardWeekDay">{handleWeekDay()}</div>
            <div className="flex gap__sm">
              <p className="date__cardDay">{handleDay()}</p>
              <p className="date__cardMonth">{handleMonth()}</p>
            </div>
        </div>
  )
}

