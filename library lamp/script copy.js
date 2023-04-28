const redux = require('redux');
const createStore = redux.createStore;

const BUY_CAKE = 'BUY_CAKE';
const initialState = {
  numOfCake: 10
}

function buyCake() {
  return {
    type: BUY_CAKE, 
    info: 'Redux action'
  }
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case BUY_CAKE: 
    return {
      ...state,
      numOfCake: state.numOfCake - 1
    }

    default: return state
  }
};

const store = createStore(reducer);
console.log('this is whole state', store);
console.log('Initail state', store.getState());
console.log('Incremer state', store.getState());
const unsubscribe = store.subscribe(() => console.log('Update state', store.getState()));
console.log('Initail state', store.getState());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();
