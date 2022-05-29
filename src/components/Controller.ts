/* eslint-disable no-unused-vars */
import { iPokemon } from '../interfaces/component.js';
import { HttpStoreClass } from '../services/http.store.class.js';
import { Header } from './Header.js';
import { List } from './List.js';

export class Controller {
    starIndex: number;
    pokeApi: HttpStoreClass;
    pokeFavs: Array<number>;
    localApi: HttpStoreClass;
    constructor() {
        new Header('slot.header');
        this.pokeApi = new HttpStoreClass('https://pokeapi.co/api/v2/pokemon/');
        this.localApi = new HttpStoreClass('http://localhost:3000/pokemon/');
        this.starIndex = 1;
        this.pokeFavs = [];
        this.updateRender();
    }
    private updateRender() {
        const promises: Array<Promise<iPokemon>> = [];
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
    private manageComponent() {
        document
            .querySelectorAll('.button')
            .forEach((item) =>
                item.addEventListener('click', this.handlerButtons.bind(this))
            );
    }
    private handlerButtons(ev: Event) {
        const target = <HTMLElement>ev.target;
        console.log(target.id);
        if (target.id === 'previous') {
            // El despliegue del ternario:
            // if ((this.starIndex - 6) < 1) {
            //     this.starIndex = 1;
            // } else {
            //     this.starIndex = this.starIndex - 6;
            // }
            this.starIndex = this.starIndex - 6 < 1 ? 1 : this.starIndex - 6;
        } else if (target.id === 'next') {
            this.starIndex = this.starIndex + 6;
        } else if (target.id === 'fav') {
            this.pokeApi
                .getPokemon(Number(target.dataset.id))
                .then((pokemon) => {
                    this.localApi.setPokemon(pokemon);
                });
        }
        this.updateRender();
    }
}
