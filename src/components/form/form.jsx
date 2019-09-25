import React, { Component } from 'react';
import Preview from './../../components/preview/preview';

export default class form extends Component {

    render() {
        return (
            <aside>
                <div className="form">
                    <div className="form__select-box">
                        <select onChange={(e) => this.setState({ modulo: e.target.value })}>
                            <option value="personagem">Personagem</option>
                            <option value="planeta">Planetas</option>
                            <option value="nave">Naves</option>
                            <option value="filme">Filmes</option>
                        </select>
                    </div>
                    <button className="form__pesquisar">Pesquisar</button>
                </div>
                <Preview />
            </aside>
        );
    }
}
