import React, { Component, Fragment } from 'react';
import Header from './Header';

import DataTable from './DataTable'

class Livros extends Component {

    constructor(props) {
        super(props);

        this.state = {
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
            titulo: 'Livros'
        }
    }



    render() {
        return (
            <Fragment>
                <Header />
                <div className="container">
                    <h1>Livros</h1>
                    <DataTable dados={this.state.autores} titulo={this.state.titulo} colunas={['livro']} />

                </div>
            </Fragment>
        );
    }
}

export default Livros;