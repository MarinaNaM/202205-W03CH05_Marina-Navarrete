/* eslint-disable no-unused-vars */
import { iPokemon } from '../interfaces/component.js';
import { Component } from './Component.js';

export class PokemonCromo extends Component {
    template: string;
    constructor(
        public pokemon: iPokemon,
        selector: string,
        public isFav: boolean
    ) {
        super();
        this.template = this.createTemplate();
        this.addRender(selector);
    }
    createTemplate() {
        let favButton = '';
        if (this.isFav) {
            favButton = `<button class="button card__info-fav" id="notFav" data-id="${this.pokemon.id}" >❤️</button>`;
        } else {
            favButton = `<button class="button card__info-fav" id="fav" data-id="${this.pokemon.id}" >🤍</button>`;
        }

        let template = `
            <li class="card">
                <div class="card__img"><img src="${
                    this.pokemon.sprites.other.dream_world.front_default
                }" alt =""></div>
                <div class="card__info">
                    <h3 class="card__info-name">${this.pokemon.name.toUpperCase()}</h3>
                    ${favButton}
                </div>
            </li>`;

        return template;
    }
}
