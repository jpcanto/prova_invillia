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
                        <p>{`Página: ${this.props.state.numeracao}`}</p>
                        <select onChange={(e) => this.setState({ pessoa: e.target.value.split(',') })}>
                            <option disable='true' hidden>Select a character</option>
                            {this.props.state.pessoas.map((pessoa, index) =>
                                <option key={index} value={pessoa.name + ',' + pessoa.films}>{pessoa.name}</option>
                            )}
                        </select>
                    </div>
                    <div className="form__pagination">
                        <button className="pagination" onClick={this.props.setBehindPagination}>
                            <i className="fa fa-angle-double-left"></i>
                        </button>
                        <p>Mudar página de personagens</p>
                        <button className="pagination" onClick={this.props.setAheadPagination}>
                            <i className="fa fa-angle-double-right"></i>
                        </button>
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
