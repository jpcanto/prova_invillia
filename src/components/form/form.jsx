import React, { Component } from 'react';
import Preview from './../../components/preview/preview';

export default class form extends Component {

    setModule = (modulo) => {
        this.props.module(modulo)
    }

    render() {
        return (
            <aside>
                <div className="form">
                    <div className="form__select-box">
                        <select onChange={(e) => this.setState({ modulo: e.target.value })}>
                            <option value="people">Personagem</option>
                            <option value="planets">Planetas</option>
                            <option value="starships">Naves</option>
                            <option value="films">Filmes</option>
                        </select>
                    </div>
                    <button
                        className="form__pesquisar"
                        onClick={() => this.setModule(this.state.modulo)}>
                        Pesquisar
                    </button>
                </div>
            </aside>
        );
    }
}
