import React, { useState } from 'react'
import Header from './components/Header'
import RestaurantList from './components/RestaurantList'
import MenuDetails from './components/MenuDetails'
import CartSidebar from './components/CartSidebar'
import OrderTrackerSidebar from './components/OrderTrackerSidebar'
import RestaurantLogin from './pages/RestaurantLogin'
import RestaurantDashboard from './pages/RestaurantDashboard'
import { useAuth } from './context/AuthContext'

export default function App() {
  const [restSelecionado, setRestSelecionado] = useState(null)
  const [carrinhoAberto, setCarrinhoAberto] = useState(false)
  const [orderId, setOrderId] = useState(null)
  const { restaurante } = useAuth()

  function abrirCarrinho() {
    setCarrinhoAberto(true)
  }
  function fecharCarrinho() {
    setCarrinhoAberto(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onAbrirCarrinho={abrirCarrinho} />

      <main className="pt-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          <section className="lg:col-span-2">
            {!restSelecionado ? (
              <RestaurantList onVerMenu={setRestSelecionado} />
            ) : (
              <MenuDetails restId={restSelecionado} />
            )}
          </section>

          <aside className="hidden lg:block">
            {/* Order Tracker lateral sempre visível em telas grandes */}
            <div className="sticky top-20">
              <div className="bg-white p-4 rounded shadow">
                <div className="font-semibold mb-2">Acompanhamento</div>
                <div className="text-sm text-gray-500">Veja o status do seu pedido aqui.</div>
                {orderId ? <OrderTrackerSidebar orderId={orderId} /> : <div className="text-sm text-gray-400 mt-2">Nenhum pedido ativo</div>}
              </div>
            </div>
          </aside>
        </div>
      </main>

      <CartSidebar aberto={carrinhoAberto} onFechar={fecharCarrinho} onPedidoCriado={(id) => setOrderId(id)} />

      {/* Mobile floating tracker */}
      {orderId && <OrderTrackerSidebar orderId={orderId} />}

      {/* Rotas simples simuladas: /login e /dashboard */}
      {/* Em produção, use react-router para rotas reais. Aqui usamos uma renderização condicional simples. */}
      <div id="routes-simples" />
      {/* Podemos detectar a rota via location.pathname — sistema simples abaixo: */}
      {window.location.pathname === '/login' && <RestaurantLogin navigateToDashboard={() => (window.location.pathname = '/dashboard')} />}
      {window.location.pathname === '/dashboard' && <RestaurantDashboard />}
    </div>
  )
}