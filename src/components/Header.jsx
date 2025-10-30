import React from 'react'
import { useCart } from '../context/CartContext'

export default function Header({ onAbrirCarrinho }) {
  const { itens } = useCart()
  const totalQtd = itens.reduce((acc, i) => acc + i.qtd, 0)

  return (
    <header className="bg-white shadow-sm p-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="text-2xl font-bold text-primary-red">Pede Fácil</div>
        <div className="text-sm text-gray-500">Rápido • Simples • Confiável</div>
      </div>
      <div className="flex items-center gap-4">
        <button className="px-4 py-2 bg-primary-red text-white rounded-md" onClick={onAbrirCarrinho} aria-label="Abrir carrinho">
          Carrinho ({totalQtd})
        </button>
        <a href="/login" className="text-sm text-gray-700">Área do Restaurante</a>
      </div>
    </header>
  )
}