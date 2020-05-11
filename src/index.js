import h from 'hyperscript';
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
            { className: 'pv1 ph3 mr2', onclick: () => dispatch('plus') }
            , '+'
        )
        , button (
            { className: 'pv1 ph3', onclick: () => dispatch('minus') }
            , '-'
        )
    ])
);

const update = (msg, model) => {
    switch(msg) {
        case 'plus':
            return model + 1;
        case 'minus':
            return model - 1;
        default:
            return model;
    }
};

// Impure code
const app = (initialmodel, view, update, node) => {
    const dispatch = (msg) => {
        model = update(msg, model);
        const updatedView = view(dispatch, model);
        node.replaceChild(updatedView, currentView);
        currentView = updatedView;
    }

    let model = initialmodel;
    let currentView = view(dispatch, model);
    node.appendChild(currentView);
}

const rootNode = document.getElementById('app');
app(initialmodel, view, update, rootNode);
