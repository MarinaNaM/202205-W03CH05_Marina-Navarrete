import { HttpStoreClass } from '../services/http.store.class.js';
import { Header } from './Header.js';
import { List } from './List.js';
export class Controller {
    starIndex;
    pokeApi;
    pokeFavs;
    localApi;
    constructor() {
        new Header('slot.header');
        this.pokeApi = new HttpStoreClass('https://pokeapi.co/api/v2/pokemon/');
        this.localApi = new HttpStoreClass('http://localhost:3000/pokemon/');
        this.starIndex = 1;
        this.pokeFavs = [];
        this.updateRender();
    }
    updateRender() {
        const promises = [];
        for (let i = this.starIndex; i <= this.starIndex + 5; i++) {
            promises.push(this.pokeApi.getPokemon(i));
        }
        Promise.all(promises).then((values) => {
            this.localApi.getAllPokemons().then((arrayFavPokemons) => {
                new List(values, 'main', arrayFavPokemons);
                this.manageComponent();
            });
        });
    }
    manageComponent() {
        document
            .querySelectorAll('.button')
            .forEach((item) => item.addEventListener('click', this.handlerButtons.bind(this)));
    }
    handlerButtons(ev) {
        const target = ev.target;
        console.log(target.id);
        if (target.id === 'previous') {
            // El despliegue del ternario:
            // if ((this.starIndex - 6) < 1) {
            //     this.starIndex = 1;
            // } else {
            //     this.starIndex = this.starIndex - 6;
            // }
            this.starIndex = this.starIndex - 6 < 1 ? 1 : this.starIndex - 6;
        }
        else if (target.id === 'next') {
            this.starIndex = this.starIndex + 6;
        }
        else if (target.id === 'fav') {
            this.pokeApi
                .getPokemon(Number(target.dataset.id))
                .then((pokemon) => {
                this.localApi.setPokemon(pokemon);
            });
        }
        this.updateRender();
    }
}
