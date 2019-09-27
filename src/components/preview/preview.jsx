import React, { Component } from 'react';

export default class preview extends Component {
    render() {
        return (
            <div className="preview">
                <div className="preview__caixa">
                    {
                        this.props.state.module === 'people' ?
                            <div className="preview__caixa__info">
                                <span>Nome: </span>{`${this.props.state.starWars.name}`}</div>
                            : null
                    }
                </div>
            </div>
        );
    }
}

