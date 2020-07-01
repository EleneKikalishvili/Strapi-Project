import DropdownActionTypes from "./dropdown.types";

export const toggleDropdownHidden = () => ({
  type: DropdownActionTypes.TOGGLE_DROPDOWN_HIDDEN,
});

export const addItem = (item) => ({
  type: DropdownActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: DropdownActionTypes.REMOVE_ITEM,
  payload: item,
});
