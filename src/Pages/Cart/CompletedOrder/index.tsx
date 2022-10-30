import {
  AnnouncementContainer,
  CompletedOrderContainer,
  DeliveryCard,
  IconContainer,
} from './styles'
import driverSVG from '../../../assets/driver.svg'
import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { OrderData, paymentMethods } from '..'
import { useEffect } from 'react'

interface LocationType {
  state: OrderData
}

export function CompletedOrder() {
  const { state } = useLocation() as unknown as LocationType
  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  },[])

  console.log(state)

  if (!state) return <></>

  return (
    <CompletedOrderContainer>
      <AnnouncementContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <h3>Agora é só aguardar que logo o café chegará até você</h3>
      </AnnouncementContainer>
      <div>
        <DeliveryCard>
          <div>
            <IconContainer className="map">
              <MapPin size={16} weight="fill" />
            </IconContainer>
            <div>
              <p>
                Entregue em <strong>{state.street}, {state.number}</strong>
              </p>
              <p>{state.neighborhood}, {state.city}, {state.state}</p>
            </div>
          </div>
          <div>
            <IconContainer className="timer">
              <Timer size={16} weight="fill" />
            </IconContainer>
            <div>
              <p>Previsão de entrega</p>
              <p>
                <strong>20 min - 30 min</strong>
              </p>
            </div>
          </div>
          <div>
            <IconContainer className="currency">
              <CurrencyDollar size={16} weight="fill" />
            </IconContainer>
            <div>
              <p>Pagamento na entrega</p>
              <p>
                <strong>{paymentMethods[state.paymentMethod].label}</strong>
              </p>
            </div>
          </div>
        </DeliveryCard>
        <div>
          <img src={driverSVG} alt="" />
        </div>
      </div>
    </CompletedOrderContainer>
  )
}
