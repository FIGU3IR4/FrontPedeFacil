export const restaurantesMock = [
  {
    id: 'r1',
    nome: 'Bistro da Esquina',
    logo: '',
    tempo_entrega: '25-35 min',
    rating: 4.7,
  },
  {
    id: 'r2',
    nome: 'Pizzaria Alfa',
    logo: '',
    tempo_entrega: '30-45 min',
    rating: 4.4,
  },
]

export const menusMock = {
  r1: [
    { id: 'i1', nome: 'Hambúrguer Clássico', descricao: 'Pão brioche, carne 180g', preco: 28.9, imagem_url: '' },
    { id: 'i2', nome: 'Batata Frita', descricao: 'Porção média', preco: 12.5, imagem_url: '' },
  ],
  r2: [
    { id: 'p1', nome: 'Pizza Margherita', descricao: 'Molho, muçarela, manjericão', preco: 34.9, imagem_url: '' },
    { id: 'p2', nome: 'Borda Recheada', descricao: 'Catupiry', preco: 8.0, imagem_url: '' },
  ],
}
