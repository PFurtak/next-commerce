import React, { useReducer } from 'react';
import CartContext from './cartContext';
import cartReducer from './cartReducer';
import { ADD_ITEM, DELETE_ITEM, INCREMENT_QTY, DECREMENT_QTY } from '../types';

const CartState = (props) => {
  const initialState = {
    items: [],
    cartTotal: 0,
  };
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = (item) => {
    console.log('add item:', item);
    dispatch({ type: ADD_ITEM, payload: item });
  };

  const deleteItem = (pid) => {
    dispatch({ type: DELETE_ITEM, payload: pid });
  };

  const incrementQty = (pid) => {
    dispatch({ type: INCREMENT_QTY, payload: pid });
  };

  const decrementQTY = (pid) => {
    dispatch({ type: DECREMENT_QTY, payload: pid });
  };

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        cartTotal: state.cartTotal,
        addItem,
        deleteItem,
        incrementQty,
        decrementQTY,
      }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartState;
