export class HttpStoreClass {
    url;
    constructor() {
        this.url = 'https://pokeapi.co/api/v2/pokemon';
    }
    // getTasks(): Promise<Array<iPokemon>> {
    //     // GET
    //     return fetch(this.url).then((resp) => {
    //         console.log(resp.status);
    //         return resp.json();
    //     });
    // }
    getPokemon(id) {
        // GET
        return fetch(this.url + `/${id}`).then((resp) => resp.json());
    }
}
