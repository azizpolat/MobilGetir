import {applyMiddleware, combineReducers, createStore} from 'redux';

import {thunk} from 'redux-thunk';

import cartSlice from './reducers/cartItem';

const reducers = combineReducers({
  cartItems: cartSlice,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
