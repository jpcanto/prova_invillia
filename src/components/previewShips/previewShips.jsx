import React, { Component } from 'react';

export default class previewShips extends Component {

    state = {
        teste: []
    }

    render() {
        console.log(this.props.state.pessoas)
        console.log('oi', this.state.teste)
        return (
            <div className="preview">
                <div className="preview__caixa">
                    <div className="preview__caixa__info">
                        {
                            this.props.state.personagem.length > 0 ?
                                <div className="preview__caixa__info__details">
                                    <span>Related Starships: </span>
                                </div>
                                : null
                        }
                        <div className="preview__caixa__info__details--films">
                            {this.props.state.pessoas.map((pessoa, index) =>
                                <div key={index}>
                                    {pessoa.name === this.props.state.personagem ? () => {
                                        console.log('hello world')
                                    } : null}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
