import { ADD_ITEM, DELETE_ITEM, INCREMENT_QTY, DECREMENT_QTY } from '../types';

const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
      };

    case DELETE_ITEM:
      return {
        ...state,
      };

    case INCREMENT_QTY:
      return {
        ...state,
      };

    case DECREMENT_QTY:
      return {
        ...state,
      };
  }
};

export default cartReducer;
