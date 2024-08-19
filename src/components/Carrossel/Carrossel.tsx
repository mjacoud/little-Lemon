import { Card } from "../Card/Card"
import teste from '../../assets/images/mediterranian-pasta.jpg'

export const Carrossel = () => {
  return (
    <div className='flex carrossel'>
         <Card src={teste} label='Greek Salad' price={15} description='The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'/>
         <Card src={teste} label='Greek Salad' price={15} description='The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'/>
         <Card src={teste} label='Greek Salad' price={15} description='The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'/>
         <Card src={teste} label='Greek Salad' price={15} description='The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'/>
       </div>
  )
}

