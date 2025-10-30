import React, { useEffect, useState } from 'react'
import { fetchMenuPorRestaurante } from '../data/mockApi'
import { useCart } from '../context/CartContext'

export default function MenuDetails({ restId }) {
  const [itensMenu, setItensMenu] = useState([])
  const [carregando, setCarregando] = useState(true)
  const { adicionarItem } = useCart()

  useEffect(() => {
    let mounted = true
    async function load() {
      setCarregando(true)
      const menu = await fetchMenuPorRestaurante(restId)
      if (mounted) setItensMenu(menu)
      setCarregando(false)
    }
    load()
    return () => (mounted = false)
  }, [restId])

  if (!restId) return <div className="p-6 text-gray-500">Selecione um restaurante</div>
  if (carregando) return <div className="p-6">Carregando cardápio...</div>

  return (
    <div className="p-6 grid gap-4">
      {itensMenu.map((item) => (
        <div key={item.id} className="border rounded p-4 bg-white flex justify-between items-center">
          <div>
            <div className="font-medium text-gray-800">{item.nome}</div>
            <div className="text-sm text-gray-500">{item.descricao}</div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="font-semibold">R$ {item.preco.toFixed(2)}</div>
            <button className="px-3 py-1 rounded-md bg-primary-red text-white" onClick={() => adicionarItem(item)}>
              Adicionar
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}