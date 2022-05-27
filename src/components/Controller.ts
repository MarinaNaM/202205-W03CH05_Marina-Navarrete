/* eslint-disable no-unused-vars */
import { iPokemon } from '../interfaces/component.js';
import { HttpStoreClass } from '../services/http.store.class.js';
import { List } from './List.js';

export class Controller {
    starIndex: number;
    constructor() {
        const pokeApi = new HttpStoreClass();
        const promises: Array<Promise<iPokemon>> = [];
        this.starIndex = 1;
        for (let i = this.starIndex; i <= this.starIndex + 6; i++) {
            promises.push(pokeApi.getPokemon(i));
        }
        Promise.all(promises).then((values) => {
            new List(values, 'slot.pokemon');
        });
    }
}
