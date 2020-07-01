import DropdownActionTypes from "./dropdown.types";
import { addItemTofavs } from "./dropdown.utils";

const INITIAL_STATE = {
  hidden: true,
  favItems: [],
};

const dropdownReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DropdownActionTypes.TOGGLE_DROPDOWN_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case DropdownActionTypes.ADD_ITEM:
      return {
        ...state,
        favItems: addItemTofavs(state.favItems, action.payload),
      };
    case DropdownActionTypes.REMOVE_ITEM:
      return {
        ...state,
        favItems: state.favItems.filter(
          (favItem) => favItem.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default dropdownReducer;
