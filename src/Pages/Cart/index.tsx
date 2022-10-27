import {
  AddressTitle,
  CartContainer,
  CheckoutContainer,
  ConfirmButton,
  FormContainer,
  PaymentButtons,
  PaymentContainer,
  PaymentTitle,
  PriceContainer,
  SeparatorContainer,
} from './styles'
import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from 'phosphor-react'
import { CheckoutItem } from './CheckoutItem'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Cart() {
  const { cartItems, cartItemsTotal, amountOfItemsInCart } =
    useContext(CartContext)
  const checkoutAmount = cartItemsTotal + 3.5
  return (
    <CartContainer>
      <FormContainer>
        <h2>Complete seu pedido</h2>
        <div>
          <AddressTitle>
            <MapPinLine size={22} />
            <div>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </AddressTitle>
          <form action="">
            <input
              className="cep"
              type="text"
              id="cep"
              name="cep"
              placeholder="CEP"
            />
            <input
              className="street"
              type="text"
              id="street"
              name="street"
              placeholder="Rua"
            />
            <input
              className="number"
              type="text"
              id="number"
              name="number"
              placeholder="Número"
            />
            <input
              className="additional"
              type="text"
              id="additional"
              name="additional"
              placeholder="Complemento"
            />
            <input
              className="optional"
              type="text"
              id="optional"
              name="optional"
              placeholder="Opcional"
            />
            <input
              className="neighborhood"
              type="text"
              id="neighborhood"
              name="neighborhood"
              placeholder="Bairro"
            />
            <input
              className="city"
              type="text"
              id="city"
              name="city"
              placeholder="Cidade"
            />
            <input
              className="state"
              type="text"
              id="state"
              name="state"
              placeholder="UF"
            />
          </form>
        </div>
        <PaymentContainer>
          <PaymentTitle>
            <CurrencyDollar size={22} />
            <div>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </PaymentTitle>
          <PaymentButtons>
            <div className="credit">
              <CreditCard size={16} />
              CARTÃO DE CRÉDITO
            </div>
            <div className="debit">
              <Bank size={16} />
              CARTÃO DE DÉBITO
            </div>
            <div className="selected">
              <Money size={16} />
              DINHEIRO
            </div>
          </PaymentButtons>
        </PaymentContainer>
      </FormContainer>
      <CheckoutContainer>
        <h2>Cafés Selecionados</h2>
        <div>
          {cartItems.map((item) => (
            <CheckoutItem key={item.id} coffee={item} />
          ))}
          <SeparatorContainer />

          <PriceContainer>
            <div>
              <p>Total de Itens</p>
              <p>
                R${' '}
                {cartItemsTotal.toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                })}
              </p>
            </div>
            <div>
              <p>Entrega</p>
              <p>R$ 3,50</p>
            </div>
            <div>
              <p>Total</p>
              <p>
                R${' '}
                {checkoutAmount.toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                })}
              </p>
            </div>
            <ConfirmButton disabled={amountOfItemsInCart <= 0}>
              CONFIRMAR PEDIDO
            </ConfirmButton>
          </PriceContainer>
        </div>
      </CheckoutContainer>
    </CartContainer>
  )
}
