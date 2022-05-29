import { iPokemon } from '../interfaces/component.js';

export class HttpStoreClass {
    url: string;
    constructor(apiUrl: string) {
        this.url = apiUrl;
    }
    getAllPokemons(): Promise<Array<iPokemon>> {
        // GET
        return fetch(this.url).then((resp) => {
            return resp.json();
        });
    }
    getPokemon(id: number): Promise<iPokemon> {
        // GET
        return fetch(this.url + `${id}`).then((resp) => resp.json());
    }
    setPokemon(pokemon: iPokemon): Promise<iPokemon> {
        // POST
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(pokemon),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => response.json());
    }
    // updateTask(pokemon: iPokemon): Promise<iPokemon> {
    //     // PUT / PATCH
    //     return fetch(this.url + `/${pokemon.sprits}`, {
    //         method: 'PATCH',
    //         body: JSON.stringify(pokemon),
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     }).then((response) => response.json());
    // }
    // deleteTask(pokemon: iPokemon): Promise<number> {
    //     // DELETE
    //     return fetch(this.url + `/${pokemon}`, {
    //         method: 'DELETE',
    //     }).then((response) => response.status);
    // }
}
