import { HttpStoreClass } from '../services/http.store.class.js';
import { Header } from './Header.js';
import { List } from './List.js';
export class Controller {
    starIndex;
    pokeApi;
    pokeFavs;
    constructor() {
        new Header('slot.header');
        this.pokeApi = new HttpStoreClass();
        this.starIndex = 1;
        this.pokeFavs = [];
        this.updateRender();
    }
    updateRender() {
        const promises = [];
        for (let i = this.starIndex; i <= this.starIndex + 6; i++) {
            promises.push(this.pokeApi.getPokemon(i));
        }
        Promise.all(promises).then((values) => {
            new List(values, 'main', this.pokeFavs);
            this.manageComponent();
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
            this.starIndex = this.starIndex + 7;
        }
        else {
            this.pokeFavs.push(Number(target.dataset.id));
        }
        this.updateRender();
    }
}
