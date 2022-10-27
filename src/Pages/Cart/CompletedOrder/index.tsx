import {
  AnnouncementContainer,
  CompletedOrderContainer,
  DeliveryCard,
  IconContainer,
} from './styles'
import driverSVG from '../../../assets/driver.svg'
import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'

export function CompletedOrder() {
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
                Entregue em <strong>Rua João Daniel Martinelli, 102</strong>
              </p>
              <p>Farrapos, Porto Alegre, RS</p>
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
                <strong>Cartão de Crédito</strong>
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
