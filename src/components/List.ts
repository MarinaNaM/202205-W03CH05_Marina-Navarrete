/* eslint-disable no-unused-vars */
import { iPokemon } from '../interfaces/component.js';
import { Component } from './Component.js';
import { PokemonCromo } from './PokeCromo.js';

export class List extends Component {
    template: string;
    constructor(public pokemons: Array<iPokemon>, selector: string) {
        super();
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
