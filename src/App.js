import React, { Component } from 'react';
import './App.css';
import Tabela from './Tabela.js';

class App extends Component {

  state = {
    autores: [
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
    ],
  };

  removeAutor = index => {

    const { autores } = this.state;

    this.setState(
      {
        autores : autores.filter((autor, posAtual) => {

          return posAtual!==index;
        }),
      }
    );
  }

  render() {

    return (
      <div className="App" >
        <Tabela autores={this.state.autores} removeAutor={this.removeAutor} />
      </div>
    );
  };
}

export default App;
