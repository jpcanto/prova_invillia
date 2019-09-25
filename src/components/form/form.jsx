import React, { Component } from 'react';
import Preview from './../../components/preview/preview';

export default class form extends Component {
    render() {
        return (
            <aside>
                <div className="form">
                    <div className="form__name-box">
                        <input type="text" placeholder="Nome do personagem" />
                    </div>
                </div>
            </aside>
        );
    }
}
