export class HttpStoreClass {
    url;
    constructor(apiUrl) {
        this.url = apiUrl;
    }
    getAllPokemons() {
        // GET
        return fetch(this.url).then((resp) => {
            return resp.json();
        });
    }
    getPokemon(id) {
        // GET
        return fetch(this.url + `${id}`).then((resp) => resp.json());
    }
    setPokemon(pokemon) {
        // POST
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(pokemon),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => response.json());
    }
}
