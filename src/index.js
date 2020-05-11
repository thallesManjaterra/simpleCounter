import { h, diff, patch } from 'virtual-dom';
import createElement from 'virtual-dom/create-element';
import hh from 'hyperscript-helpers';

const {
    div
    , button
} = hh(h);

const initialmodel = 0;

const view = (dispatch, model) => (
    div([
        div({ className: 'mv2' }, `Counter: ${model}`)
        , button (
            { className: 'pv1 ph3 mr2', onclick: () => dispatch(MSGS.ADD) }
            , '+'
        )
        , button (
            { className: 'pv1 ph3', onclick: () => dispatch(MSGS.SUBTRACT) }
            , '-'
        )
    ])
);

const update = (msg, model) => {
    switch(msg) {
        case MSGS.ADD:
            return model + 1;
        case MSGS.SUBTRACT:
            return model - 1;
        default:
            return model;
    }
};

const MSGS = {
    ADD: 'ADD'
    , SUBTRACT: 'SUBTRACT'
}

// Impure code
const app = (initialmodel, view, update, node) => {
    const dispatch = (msg) => {
        model = update(msg, model);
        const updatedView = view(dispatch, model);
        const patches = diff(currentView, updatedView);
        rootNode = patch(rootNode, patches);
        currentView = updatedView;
    }

    let model = initialmodel;
    let currentView = view(dispatch, model);
    let rootNode = createElement(currentView);
    node.appendChild(rootNode);
}

const rootNode = document.getElementById('app');
app(initialmodel, view, update, rootNode);
