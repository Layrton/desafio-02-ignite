import {
  AddressTitle,
  CartContainer,
  CheckoutContainer,
  ConfirmButton,
  FormContainer,
  InputStyled,
  InputWrapper,
  OptionalText,
  PaymentContainer,
  PaymentTitle,
  PriceContainer,
  SeparatorContainer,
  PaymentMethodButtons,
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
import { PaymentMethodInput } from './PaymentMethod'
import { useNavigate } from 'react-router-dom'

enum PaymentMethods {
  credit = 'credit',
  debit = 'debit',
  cash = 'cash'
}

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe a Rua'),
  number: zod.string().min(1, 'Informe o Número'),
  additional: zod.string(),
  neighborhood: zod.string().min(1, 'Informe o Bairro'),
  city: zod.string().min(1, 'Informe a Cidade'),
  state: zod.string().min(1, 'Informe UF'),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: 'Informe o método de pagamento' }
    },
  }),
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

export const paymentMethods = {
  credit: {
    label: 'Cartão de Crédito',
    icon: <CreditCard size={16} />,
  },
  debit: {
    label: 'Cartão de Débito',
    icon: <Bank size={16} />,
  },
  cash: {
    label: 'Dinheiro',
    icon: <Money size={16} />,
  },
}

export function Cart() {
  const { cartItems, cartItemsTotal, amountOfItemsInCart, cleanCart } =
    useContext(CartContext)
  const checkoutAmount = cartItemsTotal + 3.5

  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
  })

  const { handleSubmit, register, formState } = confirmOrderForm

  const { errors } = formState as unknown as ErrorType

  const navigate = useNavigate()
  function handleConfirmOrder(data: ConfirmOrderFormData) {
    navigate('/completed', {
      state: data
    })
    cleanCart()
  }

  const paymentMethodError = errors?.paymentMethod?.message as unknown as string

  return (
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
            <InputWrapper className="cep">
              <InputStyled
                type="text"
                id="cep"
                placeholder="CEP"
                {...register('cep')}
              />
              {errors && <p>{errors.cep?.message}</p>}
            </InputWrapper>
            <InputWrapper className="street">
              <InputStyled
                type="text"
                id="street"
                placeholder="Rua"
                {...register('street')}
              />
              {errors && <p>{errors.street?.message}</p>}
            </InputWrapper>
            <InputWrapper className="number">
              <InputStyled
                type="text"
                id="number"
                placeholder="Número"
                {...register('number')}
              />
              {errors && <p>{errors.number?.message}</p>}
            </InputWrapper>
            <InputWrapper className="additional">
              <div>
                <InputStyled
                  type="text"
                  id="additional"
                  placeholder="Complemento"
                  {...register('additional')}
                />
                <OptionalText>Opcional</OptionalText>
              </div>
              {errors && <p>{errors.additional?.message}</p>}
            </InputWrapper>
            <InputWrapper className="neighborhood">
              <InputStyled
                type="text"
                id="neighborhood"
                placeholder="Bairro"
                {...register('neighborhood')}
              />
              {errors && <p>{errors.neighborhood?.message}</p>}
            </InputWrapper>
            <InputWrapper className="city">
              <InputStyled
                type="text"
                id="city"
                placeholder="Cidade"
                {...register('city')}
              />
              {errors && <p>{errors.city?.message}</p>}
            </InputWrapper>
            <InputWrapper className="state">
              <InputStyled
                className="state-input"
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
          <PaymentMethodButtons>
            {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
              <PaymentMethodInput
                key={label}
                id={key}
                icon={icon}
                label={label}
                value={key}
                {...register('paymentMethod')}

              />
            ))}
            {paymentMethodError && <p>{paymentMethodError}</p>}
          </PaymentMethodButtons>
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
  )
}
