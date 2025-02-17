import {ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART} from '../constants';

const cartItems = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      return state.filter(
        cartITems => cartITems.product.id !== action.payload.id,
      );

    case CLEAR_CART:
      return (state = []);
  }

  return state;
};

export default cartItems;
