import { Card } from "../Card/Card"
import teste from '../../assets/images/mediterranian-pasta.jpg'

interface CarroselProps{
  type:string
}

const specials = [
  {src:teste,label:'Greek Salad',price:15,description:'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'}
]

const testimonials =[
  {src:teste,label:'Greek Salad',rate:5,description:'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'}
]

export const Carrossel:React.FC<CarroselProps> = ({type}) => {
  return (
    <div className='flex carrossel'>
        {type == "specials" ? specials.map(special=>
         <Card src={special.src} type={type} label={special.label} price={special.price} description={special.description}/>
       ) : 
       testimonials.map(testimonial=>
        <Card src={testimonial.src} type={type} label={testimonial.label} rate={testimonial.rate} description={testimonial.description}/>
      )
       } 
       </div>
  )
}

