import Button from "../Button/Button"
import { Carrossel } from "../Carrossel/Carrossel"
import { Container } from "../Container/Container"

export const Specials = () => {
  return (
    <>
      <Container>
        <div className='flex flex__space-between specials__header flex__center'>
              <h2 className='specials__title'>SPECIALS</h2>
              <Button label='Menu' link='' style='primary' size='large'/>
            </div>
         <Carrossel type="specials"/>
      </Container>
    </>
  )
}

