/* eslint-disable no-unused-vars */
import { iPokemon } from '../interfaces/component.js';
import { HttpStoreClass } from '../services/http.store.class.js';
import { Header } from './Header.js';
import { List } from './List.js';

export class Controller {
    starIndex: number;
    pokeApi: HttpStoreClass;
    pokeFavs: Array<number>;
    constructor() {
        new Header('slot.header');
        this.pokeApi = new HttpStoreClass();
        this.starIndex = 1;
        this.pokeFavs = [];
        this.updateRender();
    }
    private updateRender() {
        const promises: Array<Promise<iPokemon>> = [];
        for (let i = this.starIndex; i <= this.starIndex + 6; i++) {
            promises.push(this.pokeApi.getPokemon(i));
        }
        Promise.all(promises).then((values) => {
            new List(values, 'main', this.pokeFavs);
            this.manageComponent();
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
            this.starIndex = this.starIndex + 7;
        } else {
            this.pokeFavs.push(Number(target.dataset.id));
        }
        this.updateRender();
    }
}
