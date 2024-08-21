import useScreenWidth from "@/hooks/useScreenWidth"
import Button from "../Button/Button"
import { Container } from "../Container/Container"
import mediterranian_pasta from '@/assets/images/mediterranian-pasta.jpg'


export const About = () => {
    const width =useScreenWidth()

  return (
    <div className='flex flex__center'>
    <Container>
      {width <= 768 ? 
      <div className='flex flex__center flex__column'>
        <img src={mediterranian_pasta} alt='mediterranian-pasta' className='image'/>
        <div className='flex__center flex flex__column'>
          <h2 className='title--alternative'>Little Lemon</h2>
          <p className='subtitle--alternative'><i>Rio de janeiro</i></p>
          <p className='description--alternative'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <Button label='Learn More' type='secondary' link='reserve-a-table' size='large' />
        </div>
      </div> 
      :
      <div className='flex'>
        <div className='flex flex__align-start flex__column padding__left-md'>
            <h2 className='title--alternative'>Little Lemon</h2>
            <p className='subtitle--alternative'><i>Rio de janeiro</i></p>
            <p className='description--alternative'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <div className='button__hero flex flex__center'>
                <Button label='Learn more' type='primary' link='learn more' size="large"/>
                </div>
          </div>
          <img src={mediterranian_pasta} alt='mediterranian-pasta' className='image'/>
      </div>
      }
    </Container>
  </div>
  )
}
