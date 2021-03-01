import { ADD_ITEM, DELETE_ITEM, INCREMENT_QTY, DECREMENT_QTY } from '../types';

const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [action.payload, ...state.items],
        cartTotal: state.items.length + 1,
      };

    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.pid !== action.payload),
      };

    case INCREMENT_QTY:
      return {
        ...state,
      };

    case DECREMENT_QTY:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default cartReducer;
