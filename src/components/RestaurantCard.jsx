import React from 'react'

export default function RestaurantCard({ data, onVerMenu }) {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm flex justify-between items-center">
      <div>
        <div className="font-semibold text-lg text-gray-800">{data.nome}</div>
        <div className="text-sm text-gray-500">{data.tempo_entrega} • ⭐ {data.rating}</div>
      </div>
      <div>
        <button className="px-3 py-2 bg-primary-red text-white rounded-md" onClick={() => onVerMenu(data.id)}>
          Ver Menu
        </button>
      </div>
    </div>
  )
}