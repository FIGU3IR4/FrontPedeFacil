import React, { useEffect, useState } from 'react'
import { fetchRestaurantes } from '../data/mockApi'
import RestaurantCard from './RestaurantCard'

export default function RestaurantList({ onVerMenu }) {
  const [restaurantes, setRestaurantes] = useState([])
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    let mounted = true
    async function load() {
      setCarregando(true)
      const res = await fetchRestaurantes()
      if (mounted) setRestaurantes(res)
      setCarregando(false)
    }
    load()
    return () => (mounted = false)
  }, [])

  if (carregando) return <div className="p-6">Carregando restaurantes...</div>

  return (
    <div className="grid gap-4 p-6">
      {restaurantes.map((r) => (
        <RestaurantCard key={r.id} data={r} onVerMenu={onVerMenu} />
      ))}
    </div>
  )
}