import Button from "../Button/Button"
import { Container } from "../Container/Container"
import mediterranian_pasta from '../../assets/images/specials/mediterranian-pasta.jpg'
import useScreenWidth from '../../hooks/useScreenWidth'

export const HeroSection = () => {
const width =useScreenWidth()

  return (
    <div className='background--primary flex flex__center'>
              {width <= 767 ? 
                <Container>
              <div className='flex flex__center flex__column'>
                <img src={mediterranian_pasta} alt='mediterranian-pasta' className='image'/>
                <div className='flex__center flex flex__column'>
                  <h2 className='title'>Little Lemon</h2>
                  <p className='subtitle'><i>Rio de janeiro</i></p>
                  <p className='description'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                  <Button label='Reserve a Table' style='secondary' link='reservation' size='small' />
                </div>
              </div> 
            </Container>
              :
                <Container>
              <div className={'flex' }>
                <div className={`flex flex__align-start flex__column ${width<767 ? "padding__left-lg" : width < 1024 ? 'padding__left-md' : 'padding__left-xxl' } `}>
                    <h2 className='title'>Little Lemon</h2>
                    <p className='subtitle'><i>Rio de janeiro</i></p>
                    <p className='description'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <div className='button__hero flex flex__center'>
                      <Button label='Reserve a Table' style='secondary' link='reservation' size="large"/>
                      </div>
                  </div>
                  <img src={mediterranian_pasta} alt='mediterranian-pasta' className='image'/>
              </div>
            </Container>
              }
          </div>
  )
}

