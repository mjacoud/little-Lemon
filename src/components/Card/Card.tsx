import Button from "../Button/Button"

interface CardProps{
  label:string
  price:number
  description:string
  src:string
}

export const Card:React.FC<CardProps> = ({price,description,label,src}) => {
  return (
    <div className="background--primary card__layout">
      <img src={src} alt={`${src}-image`} className="card__image"/>
      <h3 className="card__title card__padding">{label}</h3>
      <p className="card__price card__padding">U$ {price}</p>
      <p className="card__description card__padding">{description}</p>
      <div className="flex flex__center"><Button label="Add to Cart" type="secondary" size="small"/></div>
    </div>
  )
}