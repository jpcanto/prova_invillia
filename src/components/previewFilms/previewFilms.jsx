import React, { Component } from 'react';

export default class previewFilms extends Component {
    render() {
        return (
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
                                                        <div><span>{filme.url.slice(27, 28)} - </span>
                                                            {`${filme.title}`}</div>
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
        );
    }
}
