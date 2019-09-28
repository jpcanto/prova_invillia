import React, { Component } from 'react';
import Preview from './../../components/preview/preview';

export default class form extends Component {

    state = {
        pessoa: '',
    }
    
    render() {
        return (
            <>
                <div className="form">
                    <div className="form__select-box">
                        <select onChange={(e) => this.setState({ pessoa: e.target.value.split(',') })}>
                            <option disable='true' hidden>Select a character</option>
                            {this.props.state.pessoas.map((pessoa, index)  => 
                                    <option key={index} value={pessoa.name + ',' + pessoa.films}>{pessoa.name}</option>
                                )}
                        </select>
                    </div>
                    <button
                        className="form__pesquisar"
                        onClick={() => this.props.setPerson(this.state.pessoa)}>
                        Pesquisar
                    </button>
                </div>
            </>
        );
    }
}
