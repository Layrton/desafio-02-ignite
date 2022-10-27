import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Cart } from './Pages/Cart'
import { CompletedOrder } from './Pages/Cart/CompletedOrder'
import { Home } from './Pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/completed" element={<CompletedOrder />} />
      </Route>
    </Routes>
  )
}
