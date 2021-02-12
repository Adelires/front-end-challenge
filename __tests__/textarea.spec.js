import { defineWindow } from '../src/scripts/core';
import { Textarea } from '../src/components/textarea';

var window = {};

beforeEach(() => {
    window = {};
    defineWindow(window);
});

test('test textarea', () => {
    const textarea = Textarea({
        id: 'test',
        placeholder: 'test placeholder',
        value: 'test value',
        classes: ['textarea-test'],
        onChange: () => { },
    });

    expect(textarea).toEqual(expect.stringContaining('test value'));
});

test('test error textarea input', () => {
    expect(() => {
        Textarea({
            placeholder: 'test placeholder',
            value: 'test value',
            classes: ['textarea-test'],
            onChange: () => { },
        });
    }).toThrow(/undefined/);
});

test('test bind textarea onChange', () => {
    Textarea({
        id: 'test',
        placeholder: 'test placeholder',
        value: 'test value',
        classes: ['textarea-test'],
        onChange: () => { },
    });
    expect(window['test_onChangeTextarea']).toBeDefined();
});