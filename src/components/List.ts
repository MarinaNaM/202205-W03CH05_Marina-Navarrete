/* eslint-disable no-unused-vars */
import { iPokemon } from '../interfaces/component.js';
import { Component } from './Component.js';
import { PokemonCromo } from './PokeCromo.js';

export class List extends Component {
    template: string;
    constructor(
        public pokemons: Array<iPokemon>,
        selector: string,
        public pokeFavs: Array<iPokemon>
    ) {
        super();
        this.template = this.createTemplate();
        this.render(selector);
        pokemons.forEach((pokemon) => {
            const isFav =
                pokeFavs.filter((pokemonFav) => pokemonFav.id === pokemon.id)
                    .length !== 0;

            new PokemonCromo(pokemon, 'slot.item', isFav);
        });
    }
    createTemplate() {
        let template = `
            <ul class="list-card">
                <slot class="item"></slot>
            </ul>
            <div class="buttons">
                <button class="button buttons__button-previous" id="previous">Previous</button>
                <button class="button buttons__button-next" id="next">Next</button>
            </div>
            `;

        return template;
    }
}
