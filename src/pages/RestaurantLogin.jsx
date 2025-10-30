import React, { useState } from 'react'
import { loginRestaurante } from '../data/mockApi'
import { useAuth } from '../context/AuthContext'

export default function RestaurantLogin({ navigateToDashboard }) {
  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState(null)
  const { login } = useAuth()

  async function handleSubmit(e) {
    e.preventDefault()
    const res = await loginRestaurante({ usuario, senha })
    if (res.ok) {
      login({ token: res.token, restauranteId: res.restauranteId })
      navigateToDashboard()
    } else {
      setErro(res.message)
    }
  }

  return (
    <div className="max-w-md mx-auto mt-12 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Login do Restaurante</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input className="w-full p-3 border rounded" placeholder="Usuário" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
        <input className="w-full p-3 border rounded" placeholder="Senha" type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
        {erro && <div className="text-sm text-red-500">{erro}</div>}
        <button className="w-full py-2 rounded bg-primary-red text-white">Entrar</button>
      </form>
    </div>
  )
}