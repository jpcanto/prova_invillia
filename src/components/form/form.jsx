import React, { Component } from 'react';
import Preview from './../../components/preview/preview';

export default class form extends Component {

    state = {
        pessoa: '',
    }

    setPerson = (pessoa) => {
        this.props.selecionarPessoa(pessoa)
    }
    
    render() {
        return (
            <aside>
                <div className="form">
                    <div className="form__select-box">
                        <select onChange={(e) => this.setState({ pessoa: e.target.value })}>
                            {this.props.state.pessoas.map((pessoa)  => 
                                    <option key={Math.random()} value={pessoa.name}>{pessoa.name}</option>
                                )}
                        </select>
                    </div>
                    <button
                        className="form__pesquisar"
                        onClick={() => this.setPerson(this.state.pessoa)}>
                        Pesquisar
                    </button>
                </div>
            </aside>
        );
    }
}
