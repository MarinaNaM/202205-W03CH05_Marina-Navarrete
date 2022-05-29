import { Component } from './Component.js';
import { PokemonCromo } from './PokeCromo.js';
export class List extends Component {
    pokemons;
    pokeFavs;
    template;
    constructor(pokemons, selector, pokeFavs) {
        super();
        this.pokemons = pokemons;
        this.pokeFavs = pokeFavs;
        this.template = this.createTemplate();
        this.render(selector);
        pokemons.forEach((pokemon) => {
            const isFav = pokeFavs.filter((pokemonFav) => pokemonFav.id === pokemon.id)
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
