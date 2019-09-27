import React, { Component } from 'react';

export default class preview extends Component {
    render() {
        return (
            <div className="preview">
                <div className="preview__caixa">
                    <div className="preview__caixa__info">
                        <div className="preview__caixa__info__details">
                            <span>Name: </span>{`${this.props.state.personagem}`}
                        </div>
                        <div className="preview__caixa__info__details">
                            <span>Birth Year: </span>{`${this.props.state.birth_year}`}
                        </div>
                        <div className="preview__caixa__info__details">
                            <span>Species: </span>{`${this.props.state.personagem}`}
                        </div>
                        <div className="preview__caixa__info__details">
                            <span>Height: </span>{`${this.props.state.height}`}
                        </div>
                        <div className="preview__caixa__info__details">
                            <span>Mass: </span>{`${this.props.state.mass}`}
                        </div>
                        <div className="preview__caixa__info__details">
                            <span>Gender: </span>{`${this.props.state.gender}`}
                        </div>
                        <div className="preview__caixa__info__details">
                            <span>Hair color: </span>{`${this.props.state.hair_color}`}
                        </div>
                        <div className="preview__caixa__info__details">
                            <span>Skin color: </span>{`${this.props.state.skin_color}`}
                        </div>
                        <div className="preview__caixa__info__details">
                            <span>Homeworld: </span>{`${this.props.state.personagem}`}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

