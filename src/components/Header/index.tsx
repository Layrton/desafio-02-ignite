import { CartIcon, HeaderContainer, LocationContainer } from './styles'
import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const { amountOfItemsInCart } = useContext(CartContext)

  return (
    <HeaderContainer>
      <div>
        <NavLink to="/" title="Home">
          <img src={logo} alt="Coffee Delivery Logo" />
        </NavLink>
      </div>
      <nav>
        <LocationContainer>
          <MapPin size={22} weight="fill" />
          <span>Rio de Janeiro, RJ</span>
        </LocationContainer>
        <CartIcon>
          <NavLink to="/cart" title="Carrinho">
            {amountOfItemsInCart >= 1 && <div>{amountOfItemsInCart}</div>}
            <ShoppingCart size={22} weight="fill" />
          </NavLink>
        </CartIcon>
      </nav>
    </HeaderContainer>
  )
}
