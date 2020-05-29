import React from 'react';
import './App.css';
import Tabela from './Tabela.js';

function App() {

  const autores = [
    {
      nome: 'Zygmunt Bauman',
      livro: 'Modernidade Líquida',
      preco: 'R$ 100'
    },
    {
      nome: 'Zygmunt Bauman',
      livro: 'Amor Líquido',
      preco: 'R$ 100'
    },
    {
      nome: 'Zygmunt Bauman',
      livro: 'Vida Líquida',
      preco: 'R$ 100'
    },
    {
      nome: 'Zygmunt Bauman',
      livro: 'Medo Líquido',
      preco: 'R$ 100'
    },
    {
      nome: 'Zygmunt Bauman',
      livro: 'Tempos Líquidos',
      preco: 'R$ 100'
    }
  ];

  return (
    <div className="App">
      <Tabela autores = { autores } />
    </div>
  );
}

export default App;
