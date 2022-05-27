import { Component } from './Component.js';
import { PokemonCromo } from './PokeCromo.js';
export class List extends Component {
    pokemons;
    template;
    constructor(pokemons, selector) {
        super();
        this.pokemons = pokemons;
        this.template = this.createTemplate();
        this.outRender(selector);
        pokemons.forEach((pokemon) => {
            new PokemonCromo(pokemon, 'slot.item');
        });
    }
    createTemplate() {
        let template = `
            <ul>
                <slot class="item"></slot>
            </ul>
            `;
        return template;
    }
}
