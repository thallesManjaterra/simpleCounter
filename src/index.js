import h from 'hyperscript';
import hh from 'hyperscript-helpers';

////const { 
    //div 
    //, button
//} 
//= hh(h);

//const initModel = 0;

//const view = (dispatch, model) => (
    //div([
        //div({ className: 'mv2' }, `Count: ${model}`)
        //, button(
            //{ 
                //className: 'pv1 ph3 mr2'
                //, onclick: () => dispatch('plus')
            //}
            //, '+'
        //)
        //, button(
            //{ 
                //className: 'pv1 ph3'
                //, onclick: () => dispatch('minus')
            //}
            //, '-')
    //])
//);

//const update = (msg, model) => {
    //switch (msg) {
        //case 'plus':
            //return model + 1;
        //case 'minus':
            //return model - 1;
        //default:
            //return model;
    //}
//}

//// Impure code
//const app = (initModel, update, view, node) => {
    //const dispatch = (msg) => {
        //model = update(msg, model);
        //const updatedView = view(dispatch, model);
        //node.replaceChild(updatedView, currentView);
        //currentView = updatedView;
    //}

    //let model = initModel;
    //let currentView = view(dispatch, model);
    //node.appendChild(currentView);

//}

//const rootNode = document.getElementById('app');

//app(initModel, update, view, rootNode);

////rootNode.appendChild(view(update('plus', initModel)));

const {
    div
    , button
} = hh(h);

const initialModel = 0;

const view = (model) => (
    div([
        div({ className: 'mv2' }, `Count: ${model}`)
        , button({ className: 'pv1 ph3 mr2' }, '+')
        , button({ className: 'pv1 ph3' }, '-')
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

const app = (initialModel, view, update, node) => {
    let model = initialModel;
    let currentView = view(model);
    node.appendChild(currentView);
}

const rootNode = document.getElementById('app');

app(initialModel, view, update, rootNode);


//rootNode.appendChild(view(update('plus', initialModel)));
