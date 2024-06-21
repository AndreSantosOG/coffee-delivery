import React, { useContext, useState } from 'react'
import { CoffeTicketContainer } from './styles'
import { ShoppingCart } from 'phosphor-react'
import { Tags, TagsTypes } from '../Tags/index'
import { CartContext } from '../../../../context/CartContext'

interface TicketsProps {
  name: string
  subtitle: string
  img: string
  type: TagsTypes
  price: number
  id: number
}

const TagComponents: Record<TagsTypes, React.ReactNode> = {
  tradicional: <Tags name="Tradicional" />,
  gelado: (
    <>
      <Tags name="Tradicional" />
      <Tags name="Gelado" />
    </>
  ),
  tradicionalMilk: (
    <>
      <Tags name="Tradicional" />
      <Tags name="Com leite" />
    </>
  ),
  especial: <Tags name="Especial" />,
  especialMilk: (
    <>
      <Tags name="Especial" />
      <Tags name="Com leite" />
    </>
  ),
  especialAlcool: (
    <>
      <Tags name="Especial" />
      <Tags name="Alcoólico" />
    </>
  ),
  especialAlcoolGelado: (
    <>
      <Tags name="Especial" />
      <Tags name="Alcoólico" />
      <Tags name="Gelado" />
    </>
  ),
}

export function CoffeeTicket({
  name,
  subtitle,
  img,
  type,
  price,
  id,
}: TicketsProps) {
  const [numberInput, setNumberInput] = useState(1)
  const cartContext = useContext(CartContext)

  if (!cartContext) {
    throw new Error('CartContext must be used within a CartProvider')
  }

  const { listCart, setListCart } = cartContext

  function handleMinusButton() {
    setNumberInput((prev) => Math.max(prev - 1, 1))
  }

  function handleMoreButton() {
    setNumberInput((prev) => Math.min(prev + 1, 99))
  }

  function handleButtonCart() {
    const existingItem = listCart.find((item) => item.id === id)

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + numberInput,
      }
      setListCart((prev) =>
        prev.map((item) => (item.id === id ? updatedItem : item)),
      )
    } else {
      const newItem = {
        id,
        name,
        img,
        price,
        quantity: numberInput,
      }
      setListCart((prev) => [...prev, newItem])
    }
  }

  return (
    <CoffeTicketContainer>
      <img src={img} alt={name} />
      <div className="Tags">{TagComponents[type]}</div>
      <h1>{name}</h1>
      <p className="subtitle">{subtitle}</p>
      <div className="footer">
        <span>
          R$
          <p>{price.toFixed(2)}</p>
        </span>
        <div className="input">
          <button className="buttonLess" onClick={handleMinusButton}>
            -
          </button>
          <input type="number" min="1" max="99" value={numberInput} readOnly />
          <button className="buttonMore" onClick={handleMoreButton}>
            +
          </button>
        </div>
        <button className="buttonCart" onClick={handleButtonCart}>
          <ShoppingCart size={22} weight="fill" className="icon" />
        </button>
      </div>
    </CoffeTicketContainer>
  )
}
