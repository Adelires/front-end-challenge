import { defineWindow, render } from './scripts/core';
import { apiClient } from './scripts/api';
import { App } from './app';
import './styles/main.scss';

defineWindow(window);

window.onload = async () => {
    const fields = await apiClient.getForm();

    let initState = {
        currentStep: 0,
        form: {
            request: {},
            user: {},
        },
        requestFields: fields._embedded.request_fields,
        userFields: fields._embedded.user_fields,
    };

    render(App, initState, 'app');
};
