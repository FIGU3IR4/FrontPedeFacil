// src/routes/AppRoutes.jsx
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "../components/Header";
import RestaurantList from "../components/RestaurantList";
import MenuDetails from "../components/MenuDetails";
import CartSidebar from "../components/CartSidebar";
import OrderTrackerSidebar from "../components/OrderTrackerSidebar";
import RestaurantLogin from "../pages/RestaurantLogin";
import RestaurantDashboard from "../pages/RestaurantDashboard";
import Footer from "../components/Footer";

export default function AppRoutes() {
  const [restSelecionado, setRestSelecionado] = useState(null);
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);
  const [orderId, setOrderId] = useState(null);

  function abrirCarrinho() {
    setCarrinhoAberto(true);
  }

  function fecharCarrinho() {
    setCarrinhoAberto(false);
  }

  return (
    <Routes>
      {/* 🧭 Área do Cliente */}
      <Route
        path="/"
        element={
          <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header onAbrirCarrinho={abrirCarrinho} />

            <main className="flex-grow pt-6">
              <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
                <section className="lg:col-span-2">
                  {!restSelecionado ? (
                    <RestaurantList onVerMenu={setRestSelecionado} />
                  ) : (
                    <MenuDetails restId={restSelecionado} />
                  )}
                </section>

                <aside className="hidden lg:block">
                  <div className="sticky top-20">
                    <div className="bg-white p-4 rounded shadow">
                      <div className="font-semibold mb-2">Acompanhamento</div>
                      <div className="text-sm text-gray-500">
                        Veja o status do seu pedido aqui.
                      </div>
                      {orderId ? (
                        <OrderTrackerSidebar orderId={orderId} />
                      ) : (
                        <div className="text-sm text-gray-400 mt-2">
                          Nenhum pedido ativo
                        </div>
                      )}
                    </div>
                  </div>
                </aside>
              </div>
            </main>

            {/* Carrinho lateral */}
            <CartSidebar
              aberto={carrinhoAberto}
              onFechar={fecharCarrinho}
              onPedidoCriado={(id) => setOrderId(id)}
            />

            {/* Mobile floating tracker */}
            {orderId && <OrderTrackerSidebar orderId={orderId} />}

            {/* 🧾 Rodapé */}
            <Footer />
          </div>
        }
      />

      {/* 🧑‍🍳 Área Administrativa */}
      <Route path="/login" element={<RestaurantLogin />} />
      <Route path="/dashboard" element={<RestaurantDashboard />} />
    </Routes>
  );
}
