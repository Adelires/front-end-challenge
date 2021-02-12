import { Input } from './input';
import { Select } from './select';
import { Textarea } from './textarea';

const INPUT_TYPES = {
    'small_text': 'text',
    'phone': 'phone',
    'email': 'email',
    'cep': 'text',
};

export const FormItem = ({ data, field, alert, classes }) => {
    const { label, type, placeholder, values, mask } = field;

    if (!classes) classes = [];
    if (!alert) alert = null;

    classes.push('form-item');

    const onChange = e => data[label] = e.target.value;

    let inputItem = null;
    switch (field.type) {
    case 'enumerable':
        inputItem = Select({
            id: mask || label,
            onChange,
            placeholder,
            values: Object.keys(values),
            selected: data[label] || '',
            classes: ['form-item__select'],
        });
        break;
    case 'big_text':
        inputItem = Textarea({
            id: mask || label,
            value: data[label] || '',
            placeholder,
            onChange,
            classes: ['form-item__textarea'],
        });
        break;
    case 'small_text':
    case 'email':
    case 'cep':
    case 'phone':
        inputItem = Input({
            id: mask || label,
            value: data[label] || '',
            type: INPUT_TYPES[type],
            placeholder,
            onChange,
            classes: ['form-item__input'],
        });
        break;
    }

    let alertMessage = '';
    if (alert) {
        classes.push('form-item--alert');
        alertMessage = `<p class="form-item__alert">${alert}</p>`;
    }

    return `
    <div class="${classes.join(' ')}">
        <label class="form-item__label">${label}</label>
        ${inputItem}
        ${alertMessage}
    </div>`;
};
