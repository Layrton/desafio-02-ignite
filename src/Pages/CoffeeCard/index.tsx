import {
  AmountPicker,
  BuySection,
  CardTags,
  CartButton,
  CoffeeCardContainer,
  CoffeeDescription,
  CoffeeTitle,
  IconWrapper,
  PriceContainer,
} from './styles'
import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { CartContext, CoffeeProps } from '../../contexts/CartContext'
import { useContext, useState } from 'react'

export function CoffeeCard({ coffee }: CoffeeProps) {
  const { addItemToCart } = useContext(CartContext)
  const [quantity, setQuantity] = useState(1)

  function handleIncrease() {
    setQuantity((state) => state + 1)
  }
  function handleDecrease() {
    setQuantity((state) => state - 1)
  }

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    }
    addItemToCart(coffeeToAdd)
  }

  return (
    <CoffeeCardContainer>
      <img src={coffee.icon} alt="" />
      <CardTags>
        <div>{coffee.tags[0].toUpperCase()}</div>
        {coffee.tags[1] && <div>{coffee.tags[1].toUpperCase()}</div>}
      </CardTags>
      <CoffeeTitle>{coffee.title}</CoffeeTitle>
      <CoffeeDescription>{coffee.description}</CoffeeDescription>
      <BuySection>
        <PriceContainer>
          R${' '}
          <strong>
            {coffee.price.toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
            })}
          </strong>
        </PriceContainer>
        <AmountPicker>
          <IconWrapper
            onClick={handleDecrease}
            disabled={quantity <= 1}
            className="minus"
          >
            <Minus size={14} weight="fill" />
          </IconWrapper>
          <div>{quantity}</div>
          <IconWrapper onClick={handleIncrease} className="plus">
          <Plus size={14} weight="fill" />
          </IconWrapper>
        </AmountPicker>
        <CartButton onClick={handleAddToCart}>
          <ShoppingCartSimple size={22} weight="fill" />
        </CartButton>
      </BuySection>
    </CoffeeCardContainer>
  )
}
