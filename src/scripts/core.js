///////////////////////////////////////////////////////////////////////////
// HEX
// A Functional HTML Library that supports stateless and stateful 
// components as well as component composition in less than 20 lines
// 
// https://medium.com/@metapgmr/hex-a-no-framework-approach-to-building-modern-web-apps-e43f74190b9c
//
let windowObject;

export const defineWindow = object => windowObject = object;

export const render = function (component, initState = {}, mountNode = 'app') {
    initState.render = function (representation, options = {}) {
        const start = (options.focus) ? document.getElementById(options.focus).selectionStart : 0;
        (document.getElementById(mountNode) || {}).innerHTML = representation;
        if (options.focus) {
            let f = document.getElementById(options.focus);
            f.selectionStart = start;
            f.focus();
        }
    };

    let stateRepresentation = component(initState);

    initState.render((typeof stateRepresentation === 'function') ? stateRepresentation() : stateRepresentation);
};

export const intent = function (id, i, f) {
    const intentId = `${id.toLowerCase().replace(/\W/g, '')}_${i}`;
    windowObject[intentId || '_'] = f;

    return intentId + '(event)';
};

export const value = function (el) {
    return document.getElementById(el).value;
};