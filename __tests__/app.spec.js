import { defineWindow } from '../src/scripts/core';
import { isRequiredValid, validateForm } from '../src/app';

var window = {};

beforeEach(() => {
    window = {};
    defineWindow(window);
});

test('test field is not required', () => {
    const field = {
        required: false,
    };
    const value = '';
    const expected = true;

    expect(isRequiredValid(field, value)).toEqual(expected);
});

test('test field is required but empty', () => {
    const field = {
        required: true,
    };
    const value = '';
    const expected = false;

    expect(isRequiredValid(field, value)).toEqual(expected);
});

test('test field is required with value', () => {
    const field = {
        required: true,
    };
    const value = 'field value';
    const expected = true;

    expect(isRequiredValid(field, value)).toEqual(expected);
});

test('validate form valid', () => {
    let fields = [
        {
            label: 'field1',
            required: true,
        },
        {
            label: 'field2',
            required: false,
        },
    ];
    const values = {
        field1: 'this is required',
        field2: '',
    };

    const expected = true;
    expect(validateForm(fields, values)).toEqual(expected);
});


test('validate form is not valid', () => {
    let fields = [
        {
            label: 'field1',
            required: true,
        },
        {
            label: 'field2',
            required: false,
        },
    ];
    const values = {
        field1: '',
        field2: 'this is not required',
    };

    const expected = false;
    expect(validateForm(fields, values)).toEqual(expected);
});
