import { Component } from './Component.js';
export class PokemonCromo extends Component {
    pokemon;
    template;
    constructor(pokemon, selector) {
        super();
        this.pokemon = pokemon;
        this.template = this.createTemplate();
        this.outRender(selector);
    }
    createTemplate() {
        let template = `
            <div class="card">
                <div class="card__img"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.pokemon.id}.png" alt =""></div>
                <div class="card__info">
                    <h3>${this.pokemon.name}</h3>
                </div>
            </div>`;
        return template;
    }
}
