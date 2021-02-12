import { intent } from '../scripts/core';

export const Textarea = ({ id, placeholder, onChange, value, classes }) => {
    return `
    <textarea id="${id}"
        class="${classes.join(' ')}"
        placeholder="${placeholder}" 
        value="${value}"
        onchange="${intent(id, 'onChangeTextarea', onChange)}"></textarea>`;
};