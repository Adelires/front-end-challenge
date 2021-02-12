import { intent } from '../scripts/core';

export const Select = ({ id, placeholder, values, onChange, selected, classes }) => {
    return `
    <select class="${classes.join(' ')}" onchange="${intent(id, 'onChangeSelect', onChange)}">
        <option>${placeholder}</option>
        ${values.map(value => `<option ${selected == value ? 'selected' : ''} key="${value}" value="${value}">${value}</option>`).join('')}
    </select>`;
};