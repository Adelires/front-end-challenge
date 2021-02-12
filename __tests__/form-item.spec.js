import { defineWindow } from '../src/scripts/core';
import { FormItem } from '../src/components/form-item';

var window = {};

beforeEach(() => {
    window = {};
    defineWindow(window);
});

test('test form item input', () => {
    const formItem = FormItem({
        data: {},
        field: {
            name: 'name',
            label: 'Nome',
            type: 'small_text',
            placeholder: '',
            required: true,
        },
        alert: '',
    });

    expect(formItem).toEqual(expect.stringContaining('input'));
    expect(formItem).toEqual(expect.stringContaining('<label class="form-item__label">Nome</label>'));
    expect(formItem).toEqual(expect.not.stringContaining('<p class="form-item__alert">'));
});

test('test form item textarea', () => {
    const formItem = FormItem({
        data: {},
        field: {
            name: 'Informações Adicionais',
            label: 'Informações Adicionais',
            type: 'big_text',
            placeholder: 'Descreva o que você precisa',
            required: false,
        },
        alert: '',
    });

    expect(formItem).toEqual(expect.stringContaining('textarea'));
    expect(formItem).toEqual(expect.stringContaining('<label class="form-item__label">Informações Adicionais</label>'));
});

test('test form item select', () => {
    const formItem = FormItem({
        data: {},
        field: {
            name: 'Qual será o serviço?',
            label: 'Qual será o serviço?',
            placeholder: 'Qual será o serviço?',
            mask: 'tipo de serviço',
            type: 'enumerable',
            required: true,
            values: {
                Coloração: 'Coloração',
                Corte: 'Corte',
                Escova: 'Escova ',
                Luzes: 'Luzes',
                Manicure: 'Manicure',
                Pedicure: 'Pedicure',
                Penteado: 'Penteado',
            },
        },
        alert: '',
    });

    expect(formItem).toEqual(expect.stringContaining('select'));
    expect(formItem).toEqual(expect.stringContaining('<label class="form-item__label">Qual será o serviço?</label>'));
    expect(formItem).toEqual(expect.stringContaining('Coloração'));
    expect(formItem).toEqual(expect.stringContaining('Luzes'));
    expect(formItem).toEqual(expect.stringContaining('Penteado'));
});

test('test form item with alert', () => {
    const formItem = FormItem({
        data: {},
        field: {
            name: 'name',
            label: 'Nome',
            type: 'small_text',
            placeholder: '',
            required: true,
        },
        alert: 'Este campo é requerido',
    });

    expect(formItem).toEqual(expect.stringContaining('class="form-item form-item--alert"'));
    expect(formItem).toEqual(expect.stringContaining('<p class="form-item__alert">Este campo é requerido</p>'));
});
