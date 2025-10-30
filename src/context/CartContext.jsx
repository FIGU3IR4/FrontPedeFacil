import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [itens, setItens] = useState([])
  const [pedidoAtual, setPedidoAtual] = useState(null)

  function adicionarItem(item) {
    setItens((s) => {
      const existente = s.find((i) => i.id === item.id)
      if (existente) {
        return s.map((i) => (i.id === item.id ? { ...i, qtd: i.qtd + 1 } : i))
      }
      return [...s, { ...item, qtd: 1 }]
    })
  }

  function removerItem(itemId) {
    setItens((s) => s.filter((i) => i.id !== itemId))
  }

  function alterarQtd(itemId, novaQtd) {
    setItens((s) => s.map((i) => (i.id === itemId ? { ...i, qtd: novaQtd } : i)))
  }

  function limparCarrinho() {
    setItens([])
  }

  return (
    <CartContext.Provider value={{ itens, adicionarItem, removerItem, alterarQtd, limparCarrinho, pedidoAtual, setPedidoAtual }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}