import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

import Header from './Header';
import Tabela from './Tabela';
import Form from './Formulario';
import PopUp from './PopUp';

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
    PopUp.exibeMensagem("success", "Autor removido com sucesso");
  }

  escutadorDeSubmit = autor => {

    this.setState({ autores: [...this.state.autores, autor] });
    PopUp.exibeMensagem("success", "Autor adicionado com sucesso");
  }

  render() {

    return (
      <Fragment>
        <Header />
        <div className="container mb-10">
          <h1>Livraria da tia Márcia</h1>
          <Tabela autores={this.state.autores} removeAutor={this.removeAutor} />
          <Form escutadorDeSubmit={this.escutadorDeSubmit} />
        </div>
      </Fragment>
    );
  };
}

export default App;
