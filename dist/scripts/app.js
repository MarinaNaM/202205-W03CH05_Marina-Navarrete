import { Controller } from '../components/Controller.js';
(() => {
    // const path = location.pathname.split('/');
    // if (
    //     path[path.length - 1] === '' ||
    //     path[path.length - 1] === 'index.html'
    // ) {
    //     document.addEventListener('DOMContentLoaded', index);
    // } else if (path[path.length - 1] === 'todo.html') {
    //     document.addEventListener('DOMContentLoaded', todo);
    // } else {
    //     document.addEventListener('DOMContentLoaded', about);
    // }
    document.addEventListener('DOMContentLoaded', () => {
        new Controller();
    });
})();
