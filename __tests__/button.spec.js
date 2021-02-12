import { defineWindow } from '../src/scripts/core';
import { Button } from '../src/components/button';

var window = {};

beforeEach(() => {
    window = {};
    defineWindow(window);
});

test('test simple button', () => {
    const button = Button({
        id: 'test',
        title: 'button',
        classes: ['button-test'],
        onClick: () => { },
    });

    expect(button).toEqual(expect.stringContaining('id="test"'));
    expect(button).toEqual(expect.stringContaining('button'));
});

test('test error simple button', () => {
    expect(() => {
        Button({
            id: 'test',
            title: 'button',
            classes: 'button-test',
            onClick: () => { },
        });
    }).toThrow(/classes/);
});

test('test bind button onClick', () => {
    Button({
        id: 'test',
        title: 'button',
        classes: ['button-test'],
        onClick: () => { },
    });
    expect(window['test_onButtonClick']).toBeDefined();
});