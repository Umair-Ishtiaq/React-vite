const redux = require('redux');

const int_value = {
    counter: 0
}
const reducer = (store = int_value, action) => {
    let newStore = store;
    if (action.type === 'INCREMENT') {
        return { counter: store.counter + 1 };
    } else if (action.type === 'DECREMENT') {
        return { counter: store.counter - 1 };
    } else if (action.type === 'ADDITION') {
        return { counter: store.counter + action.payload };
    }


}
const store = redux.createStore(reducer);

const subscribers = () => {
    const state = store.getState();
    console.log(state);
}

store.subscribe(subscribers);

store.dispatch({
    type: 'INCREMENT'
});
store.dispatch({
    type: 'DECREMENT'
});
store.dispatch({
    type: 'ADDITION',
    payload: 10
});