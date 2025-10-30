import React from 'react'
import { useCart } from '../context/CartContext'
import { criarPedido } from '../data/mockApi'

export default function CartSidebar({ aberto, onFechar, onPedidoCriado }) {
  const { itens, alterarQtd, removerItem, limparCarrinho, setPedidoAtual } = useCart()

  const total = itens.reduce((acc, i) => acc + i.preco * i.qtd, 0)

  async function finalizar() {
    const pedido = { itens, total }
    const res = await criarPedido(pedido)
    setPedidoAtual(res)
    // Notifica o App para abrir o tracker
    onPedidoCriado(res.order_id)
    limparCarrinho()
    onFechar()
  }

  return (
    <aside className={`fixed right-0 top-0 h-full w-80 bg-gray-50 shadow-lg transform ${aberto ? 'translate-x-0' : 'translate-x-full'} transition-transform`}>
      <div className="p-4 flex items-center justify-between border-b">
        <div className="font-semibold">Seu Pedido</div>
        <button onClick={onFechar} aria-label="Fechar">✕</button>
      </div>
      <div className="p-4 flex-1 overflow-auto">
        {itens.length === 0 ? (
          <div className="text-gray-500">Carrinho vazio</div>
        ) : (
          itens.map((it) => (
            <div key={it.id} className="flex justify-between items-center py-2 border-b">
              <div>
                <div className="font-medium">{it.nome}</div>
                <div className="text-sm text-gray-500">R$ {it.preco.toFixed(2)}</div>
              </div>
              <div className="flex items-center gap-2">
                <input type="number" className="w-14 p-1 border rounded" value={it.qtd} onChange={(e) => alterarQtd(it.id, Number(e.target.value))} />
                <button className="text-sm text-red-500" onClick={() => removerItem(it.id)}>Remover</button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="p-4 border-t">
        <div className="flex justify-between items-center mb-3">
          <div className="font-semibold">Total</div>
          <div className="font-bold">R$ {total.toFixed(2)}</div>
        </div>
        <button disabled={itens.length === 0} className="w-full py-2 rounded-md bg-primary-red text-white" onClick={finalizar}>
          Finalizar Pedido
        </button>
      </div>
    </aside>
  )
}