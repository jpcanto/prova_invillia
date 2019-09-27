import React, { Component } from 'react';

export default class preview extends Component {
    render() {
        return (
            <>
                <div className="preview">
                    <div className="preview__caixa">
                        <div className="preview__caixa__info">
                            {this.props.state.pessoas.map((pessoa) =>
                                <>
                                    {
                                        pessoa.name === this.props.state.personagem ?
                                            <>
                                                <div className="preview__caixa__info__details">
                                                    <span>Name: </span>{`${pessoa.name}`}
                                                </div>
                                                <div className="preview__caixa__info__details">
                                                    <span>Birth Year: </span>{`${pessoa.birth_year}`}
                                                </div>
                                                <div className="preview__caixa__info__details">
                                                    <span>Species: </span>{`${pessoa.species}`}
                                                </div>
                                                <div className="preview__caixa__info__details">
                                                    <span>Height: </span>{`${pessoa.height}cm`}
                                                </div>
                                                <div className="preview__caixa__info__details">
                                                    <span>Mass: </span>{`${pessoa.mass}kg`}
                                                </div>
                                                <div className="preview__caixa__info__details">
                                                    <span>Gender: </span>{`${pessoa.gender}`}
                                                </div>
                                                <div className="preview__caixa__info__details">
                                                    <span>Hair color: </span>{`${pessoa.hair_color}`}
                                                </div>
                                                <div className="preview__caixa__info__details">
                                                    <span>Skin color: </span>{`${pessoa.skin_color}`}
                                                </div>
                                                <div className="preview__caixa__info__details">
                                                    <span>Homeworld: </span>{`${pessoa.homeworld}`}
                                                </div>
                                                <div className="preview__caixa__info__details">
                                                    <span>Star Ships: </span>{`${pessoa.starships}`}
                                                </div>
                                            </> :
                                            null
                                    }
                                </>
                            )}
                        </div>
                    </div>
                </div >
                <div className="preview">
                    <div className="preview__caixa">
                        <div className="preview__caixa__info">
                            {
                                this.props.state.personagem.length > 0 ? 
                                <div className="preview__caixa__info__details">
                                    <span>films in which he participated: </span>
                                </div> 
                                : null
                            }
                            <div className="preview__caixa__info__details--films">
                                {this.props.state.filmes.map((filme) =>
                                    <>
                                        {this.props.state.personagemFilmes.map((personagem) =>
                                            <>
                                                {
                                                    filme.url === personagem ?
                                                        <>
                                                            <div>{`${filme.title}`}</div>
                                                        </> : null
                                                }
                                            </>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

