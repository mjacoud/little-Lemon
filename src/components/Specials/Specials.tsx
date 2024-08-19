import Button from "../Button/Button"
import { Carrossel } from "../Carrossel/Carrossel"

export const Specials = () => {
  return (
    <>
      <div className='flex flex__space-between specials__header flex__center'>
            <h2 className='specials__title'> SPECIALS</h2>
            <Button label='Menu' link='/menu' type='primary' size='large'/>
          </div>
       <Carrossel/>
    </>
  )
}

