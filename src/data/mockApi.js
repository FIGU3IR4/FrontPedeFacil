const delay = (ms) => new Promise((res) => setTimeout(res, ms))

import { restaurantesMock, menusMock } from './mockData'

export async function loginRestaurante({ usuario, senha }) {
  await delay(700)
  // *** ADAPTAÇÃO BACKEND AQUI ***
  if (usuario === 'demo' && senha === '1234') {
    return { ok: true, token: 'token-falso', restauranteId: 'r1' }
  }
  return { ok: false, message: 'Usuário ou senha inválidos' }
}

export async function fetchRestaurantes() {
  await delay(500)
  return restaurantesMock
}

export async function fetchMenuPorRestaurante(restId) {
  await delay(500)
  return menusMock[restId] || []
}

export async function criarPedido(pedido) {
  await delay(600)
  // Retorna order_id e status inicial
  return { order_id: `ord_${Date.now()}`, status: 'Recebido' }
}

export async function fetchStatusPedido(order_id) {
  await delay(300)
  // Simulação de ciclos de status (mock)
  const mapas = ['Recebido', 'Em Preparação', 'Saiu para Entrega', 'Entregue']
  const idx = (parseInt(order_id.split('_')[1]) || 0) % mapas.length
  return { order_id, status: mapas[idx] }
}
