import { HomeContainer, IntroContainer, ProductsContainer } from './styles'
import coffeeImg from '../../assets/coffee.svg'
import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'
import { CoffeeCard } from '../CoffeeCard'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Home() {
  const { coffeeList } = useContext(CartContext)

  return (
    <HomeContainer>
      <IntroContainer>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h3>
            Com o Cofee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h3>
          <div>
            <ul>
              <li>
                <ShoppingCart className="cart" size={32} weight="fill" />
                <p>Compra simples e segura</p>
              </li>
              <li>
                <Package className="package" size={32} weight="fill" />
                <p>Embalagem mantem o café intacto</p>
              </li>
              <li>
                <Timer className="timer" size={32} weight="fill" />
                <p>Entrega rápida e rastreada</p>
              </li>
              <li>
                <Coffee className="coffee" size={32} weight="fill" />
                <p>O café chega fresquinho até você</p>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <img src={coffeeImg} alt="Café" />
        </div>
      </IntroContainer>
      <ProductsContainer>
        <h3>Nossos cafés</h3>
        <div>
          {coffeeList.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </div>
      </ProductsContainer>
    </HomeContainer>
  )
}
