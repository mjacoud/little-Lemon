import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { GuestCounter } from "@/components/GuestCounter/GuestCounter"
import { DatePicker } from "@/components/DatePicker/DatePicker"
import { TimePicker } from "@/components/TimePicker/TimePicker"
import { Header } from "@/components/Header/Header"

import Button from "@/components/Button/Button"

import back_arrow from '../assets/icons/green_back_arrow.png'
import confirm_icon from '../assets/icons/confirm_icon.png'

import useScreenWidth from "@/hooks/useScreenWidth"
import { Footer } from "@/components/Footer/Footer"

export interface ReservationProps{
  guests:number
  day:Date,
  hours:number,
  minutes:number
  accessibility:string
  firstName:string,
  lastName:string,
  phoneNumber:string,
  email:string,
  specialRequest:string
}

enum STEPS {
  DATE = 0,
  INFO = 1,
  CONFIRMATION =2
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

export const Reservation = () => {

const [reservation,setReservation] = useState({
  guests:1,
  day:new Date(),
  hours:17,
  minutes:30,
  accessibility:'',
  firstName:'',
  lastName:"",
  phoneNumber:"",
  email:"",
  specialRequest:""
})


const width = useScreenWidth()
const [step,setStep] = useState(STEPS.DATE)
const [isSubmitted,setIsSubmitted] =useState<boolean>(false)
const [isMenuOpen,setMenuOpen] = useState<boolean>(false)

const onInputChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,input:keyof ReservationProps) => {
  setReservation({
    ...reservation,
    [input]:e.target.value,
  });
};

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitted(true); 
  setStep(STEPS.CONFIRMATION);
};


useEffect(() => {
  if (isSubmitted) {
    console.log("Formulário enviado com sucesso!");

    const timer = setTimeout(() => setIsSubmitted(false), 3000);
    return () => clearTimeout(timer);
  }
}, [isSubmitted]);


  return (
    <>
    {width < 769 ? 
    
    <>
    <header className="flex reservationPage1__title">
      <Link to={"/.."}>
        <img src={back_arrow} alt="back-arrow" className="icon" />
      </Link>
      {step == STEPS.DATE ? (
        <h2 data-testid="title">Reservation Details</h2>
      ) : step == STEPS.INFO ? (
        <div className="flex reservationPage2__title flex__center flex__column">
          <h2 role="title">Reservation Details</h2>
          <p className="reservationPage2__subTitle">summary</p>
        </div>
      ) : (
        <h2>Reservation Confirmed</h2>
      )}
    </header>

    {step == STEPS.DATE ? (
      <>
        <GuestCounter setReservation={setReservation} reservation={reservation} />
        <DatePicker setReservation={setReservation} reservation={reservation} />
        <TimePicker setReservation={setReservation} reservation={reservation} />
        <div
          className={`background--primary padding__bottom-md roundCorners ${
            width < 766 ? "margin__xsm" : "margin__sm"
          }`}
        >
          <div className="reservation__title text__center">Accessibility</div>

          <div className="flex flex__center">
            <textarea
              cols={width < 766 ? 40 : 70}
              rows={5}
              className="roundCorners text__center accessibility__input"
              placeholder="Tell us if you need any special arrangements."
              onChange={(e) => onInputChange(e, "accessibility")}
            ></textarea>
          </div>
        </div>
        <div className="background--primary flex flex__center continue__section">
          <Button
            label="Continue"
            style="secondary"
            size="large"
            onClick={() => setStep(STEPS.INFO)}
          />
        </div>
      </>
    ) : step == STEPS.INFO ? (
      <>
        <div className="background--primary roundCorners flex gap__sm layout__confirmationCard">
          <div className="date__confirmationCard--active flex flex__center flex__column gap__sm">
            <div className="date__cardWeekDay">{weekDay[reservation.day.getDay()]}</div>
            <div className="flex gap__sm">
              <p className="date__cardDay">{reservation.day.getDate()}</p>
              <p className="date__cardMonth">{month[reservation.day.getMonth()]}</p>
            </div>
          </div>
          <div className="flex flex__column confirmationCard">
            <h3>Little Lemon</h3>
            <p>{`${weekDay[reservation.day.getDay()]} ${reservation.hours}:${reservation.minutes.toString().padStart(2, '0')} | Party of ${reservation.guests}`}</p>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="background--primary contactDetails__form roundCorners">
            <h3 className="reservation__title" role="title">Contact Details</h3>
            <div className="flex flex__column gap__sm">
              <div className="flex gap__sm name__input">
                <label htmlFor="">
                  <input
                    type="text"
                    className="roundCorners contactDetails__nameInput"
                    minLength={3}
                    placeholder="First Name"
                    required
                    onChange={(e) => onInputChange(e, "firstName")}
                  />
                </label>
                <label htmlFor="">
                  <input
                    type="text"
                    className="roundCorners contactDetails__nameInput"
                    minLength={3}
                    placeholder="Last Name"
                    required
                    onChange={(e) => onInputChange(e, "lastName")}
                  />
                </label>
              </div>
              <div className="flex flex__column gap__sm">
                <label htmlFor="">
                  <input
                    type="tel"
                    className="roundCorners contactDetails__input"
                    minLength={11}
                    placeholder="Phone Number"
                    required
                    onChange={(e) => onInputChange(e, "phoneNumber")}
                  />
                </label>
                <label htmlFor="">
                  <input
                    type="email"
                    className="roundCorners contactDetails__input"
                    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$"
                    placeholder="Email"
                    required
                    onChange={(e) => onInputChange(e, "email")}
                  />
                </label>
                <label htmlFor="">
                  <input
                    type="text"
                    className="roundCorners contactDetails__input"
                    placeholder="Add Special Request"
                    onChange={(e) => onInputChange(e, "specialRequest")}
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="background--primary flex flex__center continue__section">
            <Button type="submit" label="Confirm Reservation" style="secondary" size="large" />
          </div>
        </form>
      </>
    ) : (
      <div>
        <div className="flex flex__center confirmation__icon">
          <img src={confirm_icon} alt="" />
        </div>
        <div className="flex gap__md flex__column flex__center text__center confirmation__text">
          <h3>THANK YOU</h3>

          <p className="confirmation__subTitle">Reservation Confirmed</p>
          <p className="confirmation__paragraph">
            You will get a reminder and a confirmation text on your provided phone number and email.
          </p>
        </div>

        <div className="background--primary flex flex__center continue__section-p2">
          <Button label="GO BACK" style="secondary" size="large" link="." />
        </div>
      </div>
    )}
  </>
    
    : 
    
    <div>
  <Header isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen}/>
  <div className="reservation__image">
    </div>
<form onSubmit={handleSubmit}>
    {step == STEPS.DATE ? 
    <>
    <h2 role="title" className="reservation__title--desktop">
      Reservation Details
    </h2>
<div>
  <GuestCounter setReservation={setReservation} reservation={reservation}/>
<DatePicker setReservation={setReservation} reservation={reservation}/>
<TimePicker setReservation={setReservation} reservation={reservation}/>
</div>
  <div className="flex flex__center">
  <Button label="Continue" style="secondary" size="large" onClick={()=>setStep(STEPS.INFO)}/>
  </div>
    </>
:
step == STEPS.INFO ? <>
<div className="background--primary contactDetails__form roundCorners">
<h3 role="title" className="reservation__title">Contact Details</h3>
  <div className="flex flex__column gap__sm">
    <div className="flex gap__sm name__input">
      <label htmlFor="">
      <input type="text" className='roundCorners contactDetails__nameInput'minLength={3} placeholder="First Name" required onChange={e=>onInputChange(e,"firstName")}/>
      </label>
      <label htmlFor="">
      <input type="text" className='roundCorners contactDetails__nameInput' minLength={3} placeholder="Last Name" required onChange={e=>onInputChange(e,"lastName")}/>
      </label>
    </div>
    <div className="flex flex__column gap__sm">
      <label htmlFor="">
        <input type="tel" className='roundCorners contactDetails__input' minLength={11} placeholder="Phone Number" required onChange={e=>onInputChange(e,"phoneNumber")}/>
      </label>
      <label htmlFor="">
        <input type="email" className='roundCorners contactDetails__input' pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$" placeholder="Email" required onChange={e=>onInputChange(e,"email")}/>
      </label>
      <label htmlFor="">
        <input type="text" className='roundCorners contactDetails__input' placeholder="Add Special Request"onChange={e=>onInputChange(e,"specialRequest")}/>
      </label>
    </div>
  </div>

  </div>
<div className={`${width < 1023 ? 'background--primary' : ''} flex flex__center continue__section`}>
<Button type="submit" label="Confirm Reservation" style="secondary" size="large" />
</div>
</>
:
<div>
<div className="flex flex__center confirmation__icon">
<img src={confirm_icon} alt="" />
</div>
<div className="flex gap__md flex__column flex__center text__center confirmation__text" >
<h3>THANK YOU</h3>

<p className="confirmation__subTitle">Reservation Confirmed</p>
<p className="confirmation__paragraph">You will get a reminder and a confirmation text on your provided phone number and email.</p>
</div>

<div className={`${width < 1023 ? 'background--primary' : ''} flex flex__center continue__section`}>
<Button label="GO BACK" style="secondary" size="large" link="."/>
</div>
</div>
}

</form>
<Footer/>
</div>}
    </>
  )
}

