import { Card } from "../Card/Card"
import { Container } from "../Container/Container"

import pasta from '../../assets/images/specials/mediterranian-pasta.jpg'
import salad from '../../assets/images/specials/greek salad.png'
import bruchetta from '../../assets/images/specials/bruchetta.png'
import lemon_dessert from '../../assets/images/specials/lemon dessert.png'
import octopus from '../../assets/images/specials/octopus.jpg'

import p1 from '../../assets/images/testimonials/p1.jpg'
import p2 from '../../assets/images/testimonials/p2.jpg'
import p3 from '../../assets/images/testimonials/p3.jpg'
import p4 from '../../assets/images/testimonials/p4.jpg'
import p5 from '../../assets/images/testimonials/p5.jpg'


interface CarroselProps{
  type:string
}

const specials = [
  {src:pasta,label:'Almare Pasta',price:45,description:'Al dente Spaghetti, sun-dried tomatoes, Kalamata olives, and artichoke hearts, tossed in a light garlic and basil olive oil.'},
  {src:salad,label:'Greek Salad',price:25,description:'The famous greek salad of crispy lettuce, peppers, olives, feta cheese, garnished with crunchy garlic and rosemary croutons.'},
  {src:bruchetta,label:'Bruchetta',price:15,description:'Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt, olive oil and mint.'},
  {src:lemon_dessert,label:'Lemon Dessert',price:18,description:"This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."},
  {src:octopus,label:'Grilled Octopus',price:67,description:"This Grilled Octopus is a true family treasure, passed down through generations.captures the essence of coastal dining just as grandma intended. "},
]

const testimonials =[
  {src:p1,label:'Eddie Miller',rate:5,description:'Tempor laborum nisi ut ea minim Lorem pariatur incididunt Lorem do occaecat labore cupidatat.'},
  {src:p2,label:'Asha Pena',rate:5,description:'Tempor laborum nisi ut ea minim Lorem pariatur incididunt Lorem do occaecat labore cupidatat.'},
  {src:p3,label:'Yasha Barry',rate:5,description:'Tempor laborum nisi ut ea minim Lorem pariatur incididunt Lorem do occaecat labore cupidatat.'},
  {src:p4,label:'Danielle Jenkins',rate:5,description:'Tempor laborum nisi ut ea minim Lorem pariatur incididunt Lorem do occaecat labore cupidatat.'},
  {src:p5,label:'Zoe Wilson',rate:5,description:'Tempor laborum nisi ut ea minim Lorem pariatur incididunt Lorem do occaecat labore cupidatat.'},
]

export const Carrossel:React.FC<CarroselProps> = ({type}) => {
  return (
    <Container>
      <div className='flex carrossel'>
          {type == "specials" ? specials.map(special=>
           <Card src={special.src} type={type} label={special.label} price={special.price} description={special.description} key={special.label}/>
         ) :
         testimonials.map(testimonial=>
          <Card src={testimonial.src} type={type} label={testimonial.label} rate={testimonial.rate} description={testimonial.description} key={testimonial.label}/>
        )
         }
         </div>
    </Container>
  )
}

