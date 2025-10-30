import React from 'react'
import { useAuth } from '../context/AuthContext'

export default function RestaurantDashboard() {
  const { restaurante } = useAuth()

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">Painel do Restaurante</h1>
      <div className="mt-4">
        <p>Bem-vindo(a)! Painel fictício para demonstração.</p>
        <p className="text-sm text-gray-500 mt-2">Aqui você exibiria pedidos, status, e ferramentas administrativas.</p>
      </div>
    </div>
  )
}