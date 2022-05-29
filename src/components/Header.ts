import { Component } from './Component.js';
import { Navbar } from './Navbar.js';

export class Header extends Component {
    constructor(selector: string) {
        super();
        this.template = this.createTemplate();
        this.outRender(selector);
        new Navbar('slot.navbar');
    }
    createTemplate() {
        return `
        <header>
        <h1 class="title">POKEDEX</h1>
        <slot class='navbar'></slot>
        </header>
        
        `;
    }
}
