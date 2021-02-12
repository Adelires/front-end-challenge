import { intent } from '../scripts/core';

export const Input = ({ id, type, classes, placeholder, onChange, value }) => {
    return `
    <input id="${id}" 
        type="${type}" 
        placeholder="${placeholder}" 
        value="${value}"
        class="${classes.join(' ')}"
        onchange="${intent(id, 'onInputChange', onChange)}">`;
};