/* eslint-disable no-unused-vars */
import { iPokemon } from '../interfaces/component.js';
import { Component } from './Component.js';

export class PokemonCromo extends Component {
    template: string;
    constructor(public pokemon: iPokemon, selector: string) {
        super();
        this.template = this.createTemplate();
        this.addRender(selector);
    }
    createTemplate() {
        let template = `
            <li class="card">
                <div class="card__img"><img src="${this.pokemon.sprites.other.dream_world.front_default}" alt =""></div>
                <div class="card__info">
                    <h3>${this.pokemon.name}</h3>
                </div>
            </li>`;

        return template;
    }
}
