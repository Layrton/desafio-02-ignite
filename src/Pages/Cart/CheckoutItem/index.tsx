import { CartContext, CartItem } from '../../../contexts/CartContext'
import {
  AmountPicker,
  AmountPickerContainer,
  CheckoutItemContainer,
  TitleAndAmount,
} from './styles'

import { Trash, Minus, Plus } from 'phosphor-react'
import { useContext } from 'react'

interface CoffeeCartCheckoutProps {
  coffee: CartItem
}

export function CheckoutItem({ coffee }: CoffeeCartCheckoutProps) {
  const { changeCartItemQuantity, removeCartItem } = useContext(CartContext)

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, 'increase')
  }
  function handleDecrease() {
    changeCartItemQuantity(coffee.id, 'decrease')
  }

  function handleRemove() {
    removeCartItem(coffee.id)
  }

  const totalPrice = coffee.price * coffee.quantity

  return (
    <CheckoutItemContainer>
      <div>
        <img src={coffee.icon} alt="" />
        <TitleAndAmount>
          <p>{coffee.title}</p>
          <AmountPickerContainer>
            <AmountPicker>
              <div className="minus" onClick={handleDecrease}>
                <Minus size={14} weight="fill" />
              </div>
              <div>{coffee.quantity}</div>
              <div className="plus" onClick={handleIncrease}>
                <Plus size={14} weight="fill" />
              </div>
            </AmountPicker>
            <div onClick={handleRemove}>
              <Trash size={16} />
              REMOVER
            </div>
          </AmountPickerContainer>
        </TitleAndAmount>
      </div>
      <div>
        R$
        {totalPrice.toLocaleString('pt-BR', {
          minimumFractionDigits: 2,
        })}
      </div>
    </CheckoutItemContainer>
  )
}
