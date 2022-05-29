import { Component } from './Component.js';
export class Navbar extends Component {
    options;
    constructor(selector) {
        super();
        this.options = [
            { path: './index.html', label: 'Home' },
            { path: './favorits.html', label: 'Favorites' },
        ];
        this.template = this.createTemplate();
        this.outRender(selector);
    }
    createTemplate() {
        let html = `<nav class="menu" ><ul class="navbar__list" >`;
        this.options.forEach((item) => (html += `<li><a class="links" href=${item.path}>${item.label}<a/></li>`));
        html += `</ul></nav>`;
        return html;
    }
}
