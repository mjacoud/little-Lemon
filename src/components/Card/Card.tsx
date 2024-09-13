import Button from "../Button/Button"
import { Rating } from "../Rating/Rating"

interface CardProps{
  label:string
  price?:number
  description:string
  src:string
  type:string
  rate?:number
}

export const Card:React.FC<CardProps> = ({price,description,label,src,type,rate}) => {


  return (
    <>
      { type == "specials" ?
      <div className="background--primary card__layout">
        <img src={src} alt={`${src}-image`} className="card__image"/>
        <h3 className="card__title card__padding">{label}</h3>
        <p className="card__price card__padding">U$ {price}</p>
        <p className="card__description card__padding">{description}</p>
        <div className="flex flex__center">
          <Button label="Add to Cart" style="secondary" size="small"/>
          </div>
      </div>
      : type == "testimonials" ?
      <div className="background--primary card__layout flex flex__center flex__column">
        <img src={src} alt={`${src}-image`} className="card__testimonialsImage"/>
        <h3 className="card__title card__padding">{label}</h3>
        <Rating rate={rate!}/>
        <p className="card__description card__padding text__center">{description}</p>
      </div>
      : 
      <div></div>
        }
    </>

  )
}