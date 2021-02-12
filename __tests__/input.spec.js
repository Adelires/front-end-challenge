import { defineWindow } from '../src/scripts/core';
import { Input } from '../src/components/input';

var window = {};

beforeEach(() => {
    window = {};
    defineWindow(window);
});

test('test input', () => {
    const input = Input({
        id: 'test',
        type: 'text',
        placeholder: 'test placeholder',
        value: 'test value',
        classes: ['input-test'],
        onChange: () => { },
    });

    expect(input).toEqual(expect.stringContaining('id="test"'));
    expect(input).toEqual(expect.stringContaining('value="test value"'));
});

test('test error type input', () => {
    expect(() => {
        Input({
            type: 'text',
            placeholder: 'test placeholder',
            value: 'test value',
            classes: ['input-test'],
            onChange: () => { },
        });
    }).toThrow(/undefined/);
});

test('test bind input onChange', () => {
    Input({
        id: 'test',
        type: 'text',
        placeholder: 'test placeholder',
        value: 'test value',
        classes: ['input-test'],
        onChange: () => { },
    });
    expect(window['test_onInputChange']).toBeDefined();
});