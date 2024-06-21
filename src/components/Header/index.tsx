import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderContainer } from './styles'
import Logo from '../../assets/Logo.svg'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'

export function Header() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('CartContext must be used within a CartProvider')
  }
  const { listCart } = context
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={Logo} alt="" />
      </NavLink>
      <div className="buttonsHeader">
        <button className="buttonLocation">
          <MapPin size={22} weight="fill" className="map-pin-icon" />
          <p>Marília, SP</p>
        </button>
        <NavLink to="/checkout" title="Checkout" className="buttonCart">
          <ShoppingCart size={22} weight="fill" color="#C47F17" />
          <span>{listCart.length}</span>
        </NavLink>
      </div>
    </HeaderContainer>
  )
}
