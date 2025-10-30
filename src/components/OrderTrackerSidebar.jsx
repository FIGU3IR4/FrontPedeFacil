import React, { useEffect, useState } from 'react'
import { fetchStatusPedido } from '../data/mockApi'

function corPorStatus(status) {
  if (status === 'Entregue') return 'bg-status-green text-white'
  if (status === 'Em Preparação' || status === 'Saiu para Entrega') return 'bg-status-yellow text-white'
  if (status === 'Cancelado') return 'bg-status-red-soft text-white'
  return 'bg-gray-200 text-gray-800'
}

export default function OrderTrackerSidebar({ orderId }) {
  const [status, setStatus] = useState(null)

  useEffect(() => {
    if (!orderId) return
    let mounted = true

    async function acompanhar() {
      // Simula polling ou websocket. Aqui usamos setInterval com fetch
      const intervalo = setInterval(async () => {
        const res = await fetchStatusPedido(orderId)
        if (mounted) setStatus(res.status)
      }, 2000)

      return () => clearInterval(intervalo)
    }

    acompanhar()
    return () => (mounted = false)
  }, [orderId])

  if (!orderId) return null

  return (
    <div className="fixed left-4 top-20 w-64 p-4 rounded-lg shadow-lg bg-white">
      <div className="font-semibold">Pedido: {orderId}</div>
      <div className={`mt-3 p-3 rounded ${corPorStatus(status)}`}>
        <div className="text-sm">Status atual</div>
        <div className="font-bold">{status || 'Carregando...'}</div>
      </div>
      <div className="text-xs text-gray-500 mt-2">Apenas simulação — substitua por WebSocket para real-time</div>
    </div>
  )
}