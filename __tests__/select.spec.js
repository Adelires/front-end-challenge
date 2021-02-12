import { defineWindow } from '../src/scripts/core';
import { Select } from '../src/components/select';

var window = {};

beforeEach(() => {
    window = {};
    defineWindow(window);
});

test('test select', () => {
    const select = Select({
        id: 'test',
        placeholder: 'test placeholder',
        values: ['test_a', 'test_b'],
        classes: ['select-test'],
        selected: 'test_b',
        onChange: () => { },

    });

    expect(select).toEqual(expect.stringContaining('<option>test placeholder</option>'));
    expect(select).toEqual(expect.stringContaining('<option  key="test_a" value="test_a">test_a</option>'));
    expect(select).toEqual(expect.stringContaining('<option selected key="test_b" value="test_b">test_b</option>'));
});

test('test error value select', () => {
    expect(() => {
        Select({
            id: 'test',
            placeholder: 'test placeholder',
            classes: ['select-test'],
            selected: 'test_b',
            onChange: () => { },
        });
    }).toThrow(/undefined/);
});

test('test bind select onChange', () => {
    Select({
        id: 'test',
        placeholder: 'test placeholder',
        values: ['test_a', 'test_b'],
        classes: ['select-test'],
        selected: 'test_b',
        onChange: () => { },
    });
    expect(window['test_onChangeSelect']).toBeDefined();
});