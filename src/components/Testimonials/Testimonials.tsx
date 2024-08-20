
import { Carrossel } from "../Carrossel/Carrossel"

export const Testimonials = () => {
  return (
    <>
      <div className='flex flex__space-between specials__header flex__center'>
            <h2 className='specials__title'>Testimonials</h2>
          </div>
       <Carrossel type="testimonials"/>
    </>
  )
}

