
import { Carrossel } from "../Carrossel/Carrossel"
import { Container } from "../Container/Container"

export const Testimonials = () => {
  return (
    <>
      <div className='testimonials__header'>
            <h2 className='specials__title'>TESTIMONIALS</h2>
          </div>
       <Container>
         <Carrossel type="testimonials"/>
       </Container>
    </>
  )
}

