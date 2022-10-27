import { createContext, ReactNode, useEffect, useState } from 'react'
import { produce } from 'immer'

import espresso from '../assets/coffees/espresso.svg'
import american from '../assets/coffees/american.svg'
import creamyEspresso from '../assets/coffees/creamy-espresso.svg'
import icedCoffee from '../assets/coffees/iced-coffee.svg'
import coffeeWithMilk from '../assets/coffees/coffee-with-milk.svg'
import latte from '../assets/coffees/latte.svg'
import capuccino from '../assets/coffees/capuccino.svg'
import macchiato from '../assets/coffees/macchiato.svg'
import mocaccino from '../assets/coffees/mocaccino.svg'
import hotChocolate from '../assets/coffees/hot-chocolate.svg'
import cuban from '../assets/coffees/cuban.svg'
import arab from '../assets/coffees/arab.svg'
import irish from '../assets/coffees/irish.svg'

interface CartContextProviderProps {
  children: ReactNode
}

export interface CoffeeListType {
  id: number
  tags: string[]
  title: string
  description: string
  price: number
  icon: string
}

export interface CoffeeProps {
  coffee: CoffeeListType
}

export interface CartItem extends CoffeeListType {
  quantity: number
}

export interface CartContextType {
  coffeeList: CoffeeListType[]
  cartItems: CartItem[]
  amountOfItemsInCart: number
  addItemToCart: (coffee: CartItem) => void
  changeCartItemQuantity: (
    cartItemId: number,
    type: 'increase' | 'decrease',
  ) => void
  removeCartItem: (cartItemId: number) => void
  cartItemsTotal: number
}

const COFFEE_ITEMS_STORAGE_KEY = 'coffeeDelivery:cartItems'

export const CartContext = createContext({} as CartContextType)

const coffeeList = [
  {
    id: 1,
    tags: ['tradicional'],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    icon: espresso,
  },
  {
    id: 2,
    tags: ['tradicional'],
    title: 'Expresso Tradicional',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    icon: american,
  },
  {
    id: 3,
    tags: ['tradicional'],
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    icon: creamyEspresso,
  },
  {
    id: 4,
    tags: ['tradicional', 'gelado'],
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    icon: icedCoffee,
  },
  {
    id: 5,
    tags: ['tradicional', 'com leite'],
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    icon: coffeeWithMilk,
  },
  {
    id: 6,
    tags: ['tradicional', 'com leite'],
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    icon: latte,
  },
  {
    id: 7,
    tags: ['tradicional', 'com leite'],
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    icon: capuccino,
  },
  {
    id: 8,
    tags: ['tradicional', 'com leite'],
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    icon: macchiato,
  },
  {
    id: 9,
    tags: ['tradicional', 'com leite'],
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    icon: mocaccino,
  },
  {
    id: 10,
    tags: ['especial', 'com leite'],
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    icon: hotChocolate,
  },
  {
    id: 11,
    tags: ['especial', 'alcoolico', 'gelado'],
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    icon: cuban,
  },
  {
    id: 12,
    tags: ['especial'],
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    icon: american,
  },
  {
    id: 13,
    tags: ['especial'],
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café aárabe e especiarias',
    price: 9.9,
    icon: arab,
  },
  {
    id: 14,
    tags: ['especial', 'alcoolico'],
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    icon: irish,
  },
]

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY)
    if (storedCartItems) {
      return JSON.parse(storedCartItems)
    }
    return []
  })

  const amountOfItemsInCart = cartItems.length

  const cartItemsTotal = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0)

  function addItemToCart(coffee: CartItem) {
    const coffeeAlreadyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id,
    )

    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlreadyExistsInCart < 0) {
        draft.push(coffee)
      } else {
        draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity
      }
    })

    setCartItems(newCart)
  }
  function changeCartItemQuantity(
    cartItemId: number,
    type: 'increase' | 'decrease',
  ) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId,
      )

      if (coffeeExistsInCart >= 0) {
        const item = draft[coffeeExistsInCart]
        draft[coffeeExistsInCart].quantity =
          type === 'increase' ? item.quantity + 1 : item.quantity - 1
      }
    })
    setCartItems(newCart)
  }

  function removeCartItem(cartItemId: number) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId,
      )

      if (coffeeExistsInCart >= 0) {
        draft.splice(coffeeExistsInCart, 1)
      }
    })

    setCartItems(newCart)
  }

  useEffect(() => {
    localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        coffeeList,
        addItemToCart,
        amountOfItemsInCart,
        cartItems,
        changeCartItemQuantity,
        removeCartItem,
        cartItemsTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
