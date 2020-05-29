import React, { Component } from 'react';

const TableHead = () => {

    return (
        <thead>
            <tr>
                <th>Autores</th>
                <th>Livros</th>
                <th>Preços</th>
            </tr>
        </thead>
    );
}

const TableBody = () => {

    return (
        <tbody>
            <tr>
                <td>Zygmunt Bauman</td>
                <td>Modernidade Líquida</td>
                <td>R$ 100,00</td>
            </tr>
            <tr>
                <td>Zygmunt Bauman</td>
                <td>Amor Líquido</td>
                <td>R$ 100,00</td>
            </tr>
            <tr>
                <td>Zygmunt Bauman</td>
                <td>Tempos Líquidos</td>
                <td>R$ 100,00</td>
            </tr>
            <tr>
                <td>Zygmunt Bauman</td>
                <td>Medo Líquido</td>
                <td>R$ 100,00</td>
            </tr>
        </tbody>
    );
}

class Tabela extends Component {

    render() {

        return (
            <table>
                <TableHead />
                <TableBody />
            </table>
        );
    }

}

export default Tabela;
