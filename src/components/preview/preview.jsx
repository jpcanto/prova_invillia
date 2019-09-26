import React, { Component } from 'react';

export default class preview extends Component {
    render() {
        return (
            <div className="preview">
                <div className="preview__caixa">
                    <div className="preview__caixa__info">{`Nome: ${this.props.state.starWars.name}`}</div>
                    <div className="preview__caixa__info">{`Cor do cabelo: ${this.props.state.starWars.hair_color}`}</div>
                    <div className="preview__caixa__info">{`Cor dos olhos: ${this.props.state.starWars.eye_color}`}</div>
                </div>
            </div>
        );
    }
}

