import { Button } from './components/button';
import { FormItem } from './components/form-item';

export const isRequiredValid = (field, value) => {
    if (!field.required) return true;
    if (field.required && value) return true;
    return false;
};

export const validateForm = (fields, values) => {
    let valid = true;
    for (const field of fields) {
        field.alert = '';
        if (!isRequiredValid(field, values[field.label])) {
            field.alert = 'Este campo é requerido';
            valid = false;
        }
    }
    return valid;
};

export const App = ({
    currentStep,
    form,
    requestFields,
    userFields,
    render,
}) => {
    let { user, request } = form;

    let currentFormItems = [];
    let currentFormData = [];

    const nextButton = Button({
        id: 'button-next',
        title: 'Próximo',
        classes: ['button__next', 'button'],
        onClick: () => {
            if (!validateForm(currentFormData, request)) {
                render(representation());
                return;
            }
            if (currentStep === requestFields.length) return;
            currentStep++;
            render(representation());
        },
    });

    const previousButton = Button({
        id: 'button-previous',
        title: 'Voltar',
        classes: ['button__previous', 'button'],
        onClick: () => {
            if (currentStep == 0) return;
            currentStep--;
            render(representation());
        },
    });

    const finishButton = Button({
        id: 'button-finish',
        title: 'Finalizar',
        classes: ['button__finish', 'button'],
        onClick: () => {
            if (!validateForm(currentFormData, user)) {
                render(representation());
                return;
            }
        },
    });

    const initButtonSet = [nextButton];
    const midButtonSet = [previousButton, nextButton];
    const finishButtonSet = [previousButton, finishButton];

    const representation = () => {
        let currentButtonSet = [];
        currentFormItems = currentFormData = [];

        if (currentStep === 0) currentButtonSet = initButtonSet;
        if (currentStep > 0 && currentStep < requestFields.length) currentButtonSet = midButtonSet;

        if (currentStep < requestFields.length) {
            currentFormData = [requestFields[currentStep]];
            currentFormItems.push(FormItem({
                data: request,
                field: requestFields[currentStep],
                alert: requestFields[currentStep].alert || '',
            }));
        }

        if (currentStep === requestFields.length) {
            currentFormData = userFields;
            currentButtonSet = finishButtonSet;
            currentFormItems = userFields.map(field => FormItem({
                data: user,
                alert: field.alert,
                field,
            }));
        }

        return `
        <div class="container">
            <h2 class="title">
                Explique o que você precisa 
                <small class="title__description">Receba até 4 orçamentos grátis, online!</small>
            </h2>
            <form class="form">
                ${currentFormItems.join('')}
                <div class="form__buttons">${currentButtonSet.join('')}</div>
            </form>
        </div>`;
    };

    return representation;
};