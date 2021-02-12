const API_URL = 'http://localhost:3000';

export const apiClient = {
    async getForm() {
        return fetch(API_URL + '/form').then(res => res.json());
    },
};
