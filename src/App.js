import React, { Component, Fragment } from 'react';
import './App.css';
import Tabela from './Tabela.js';
import Form from './Formulario.js';

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
        autores: autores.filter((autor, posAtual) => {

          return posAtual !== index;
        }),
      }
    );
  }

  render() {

    return (
      <Fragment>
        <Tabela autores={this.state.autores} removeAutor={this.removeAutor} />
        <Form />
      </Fragment>
    );
  };
}

export default App;
