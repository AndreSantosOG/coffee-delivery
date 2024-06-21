import { Trash } from 'phosphor-react'
import { CoffeeCardContainer } from './styles'
import { useContext } from 'react'
import { CartContext } from '../../../../context/CartContext'

interface CoffeeCardProps {
  id: number
  name: string
  price: number
  img: string
  quantity: number
}

export function CoffeeCard({
  id,
  name,
  price,
  img,
  quantity,
}: CoffeeCardProps) {
  const { setListCart } = useContext(CartContext)

  function handleMinusButton() {
    event.preventDefault()
    setListCart((prevList) =>
      prevList.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    )
  }

  function handleMoreButton() {
    event.preventDefault()
    setListCart((prevList) =>
      prevList.map((item) =>
        item.id === id && item.quantity < 99
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    )
  }

  function handleRemoveButton() {
    setListCart((prevList) => prevList.filter((item) => item.id !== id))
  }

  return (
    <CoffeeCardContainer>
      <div className="CoffeeCard">
        <img src={img} alt={name} />
        <div>
          <h3>{name}</h3>
          <div className="buttonsCoffeeCard">
            <div className="input">
              <button className="buttonLess" onClick={handleMinusButton}>
                -
              </button>
              <input type="number" min="1" max="99" value={quantity} readOnly />
              <button className="buttonMore" onClick={handleMoreButton}>
                +
              </button>
            </div>
            <button onClick={handleRemoveButton}>
              <Trash size={16} color="#8047F8" />
              Remover
            </button>
          </div>
        </div>
        <p className="price">R$ {price.toFixed(2)}</p>
      </div>
    </CoffeeCardContainer>
  )
}
