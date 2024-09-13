import useScreenWidth from "@/hooks/useScreenWidth"
import Button from "../Button/Button"
import { Container } from "../Container/Container"
import mediterranian_pasta from '../../assets/images/specials/mediterranian-pasta.jpg'


export const About = () => {
    const width =useScreenWidth()

  return (
    <>
    {width <768 ? 
    <>
    <Container>
    <div className='flex flex__center'>
      <div className='flex flex__center flex__column'>
        <img src={mediterranian_pasta} alt='mediterranian-pasta' className='image'/>
        <div className='flex__center flex flex__column'>
          <h2 className='title--alternative'>Little Lemon</h2>
          <p className='subtitle--alternative'><i>Rio de janeiro</i></p>
          <p className='description--alternative'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <Button label='Learn More' style='secondary' link='' size='large' />
        </div>
      </div> 
          </div>
          </Container>
    </>
      :
      <>
      <Container>
         <div className='flex flex__center about__layout'>
        <div className={`flex flex__align-start flex__column ${ width < 769 ? "padding__left-xxxl" : width < 1023 ? "padding__left-xl " : width < 1439 ? "padding__left-xxl" : 'padding__left-sm'} `} >
            <h2 className='title--alternative'>Little Lemon</h2>
            <p className='subtitle--alternative'><i>Rio de janeiro</i></p>
            <p className='description--alternative'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <div className='button__hero flex flex__center'>
                <Button label='Learn more' style='primary' link='' size="large"/>
                </div>
          </div>
          <div className="container__image"><img src={mediterranian_pasta} alt='mediterranian-pasta' className='about__image'/></div>
         </div>
         </Container>
     </>
      }
      </>
  )
}
