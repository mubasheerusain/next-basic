import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducers } from "./reducers/index"

const Store = createStore(reducers, {}, composeWithDevTools());


export default Store;