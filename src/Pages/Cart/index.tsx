import {
  AddressTitle,
  CartContainer,
  CheckoutContainer,
  ConfirmButton,
  FormContainer,
  InputStyled,
  InputWrapper,
  OptionalText,
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
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe o Rua'),
  number: zod.string().min(1, 'Informe o Número'),
  additional: zod.string(),
  neighborhood: zod.string().min(1, 'Informe o Bairro'),
  city: zod.string().min(1, 'Informe a Cidade'),
  state: zod.string().min(1, 'Informe a UF'),
  // paymentMethod: zod.nativeEnum(PaymentMethods, {
  //   errorMap: () => {
  //     return { message: 'Informe o método de pagamento' }
  //   },
  // }),
})

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>

type ConfirmOrderFormData = OrderData

interface ErrorType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function Cart() {
  const { cartItems, cartItemsTotal, amountOfItemsInCart } =
    useContext(CartContext)
  const checkoutAmount = cartItemsTotal + 3.5

  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
  })

  const { handleSubmit, register, formState } = confirmOrderForm

  const { errors } = formState as unknown as ErrorType

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    console.log(data)
  }

  return (
    // <FormProvider>
    <CartContainer>
      <FormContainer
        className="container"
        onSubmit={handleSubmit(handleConfirmOrder)}
      >
        <h2>Complete seu pedido</h2>
        <div>
          <AddressTitle>
            <MapPinLine size={22} />
            <div>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </AddressTitle>
          <form id="address-form">
            <InputWrapper>
              <InputStyled
                className="cep"
                type="text"
                id="cep"
                placeholder="CEP"
                {...register('cep')}
              />
              {errors && <p>{errors.cep?.message}</p>}
            </InputWrapper>
            <InputWrapper>
              <InputStyled
                className="street"
                type="text"
                id="street"
                placeholder="Rua"
                {...register('street')}
              />
              {errors && <p>{errors.street?.message}</p>}
            </InputWrapper>
            <InputWrapper>
              <InputStyled
                className="number"
                type="text"
                id="number"
                placeholder="Número"
                {...register('number')}
              />
              {errors && <p>{errors.number?.message}</p>}
            </InputWrapper>
            <InputWrapper>
              <div>
                <InputStyled
                  className="additional"
                  type="text"
                  id="additional"
                  placeholder="Complemento"
                  {...register('additional')}
                />
                <OptionalText>Opcional</OptionalText>
              </div>
              {errors && <p>{errors.additional?.message}</p>}
            </InputWrapper>

            <InputWrapper>
              <InputStyled
                className="neighborhood"
                type="text"
                id="neighborhood"
                placeholder="Bairro"
                {...register('neighborhood')}
              />
              {errors && <p>{errors.neighborhood?.message}</p>}
            </InputWrapper>
            <InputWrapper>
              <InputStyled
                className="city"
                type="text"
                id="city"
                placeholder="Cidade"
                {...register('city')}
              />
              {errors && <p>{errors.city?.message}</p>}
            </InputWrapper>
            <InputWrapper>
              <InputStyled
                className="state"
                type="text"
                id="state"
                placeholder="UF"
                {...register('state')}
              />
              {errors && <p>{errors.state?.message}</p>}
            </InputWrapper>
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
            <ConfirmButton
              form="address-form"
              type="submit"
              disabled={amountOfItemsInCart <= 0}
            >
              CONFIRMAR PEDIDO
            </ConfirmButton>
          </PriceContainer>
        </div>
      </CheckoutContainer>
    </CartContainer>
    // </FormProvider>
  )
}
