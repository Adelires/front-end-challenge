import { intent } from '../scripts/core';

export const Button = ({ id, title, classes, onClick }) => {
    return `
    <button id="${id}"
        class="${classes.join(' ')}" 
        onclick="${intent(id, 'onButtonClick', onClick)}">
        ${title}
    </button>`;
};