import { createSelector } from "reselect";

const selectDropdown = (state) => state.dropdown;

export const selectFavItems = createSelector(
  [selectDropdown],
  (dropdown) => dropdown.favItems
);

export const selectDropdownHidden = createSelector(
  [selectDropdown],
  (dropdown) => dropdown.hidden
);

export const selectTotalCount = createSelector([selectFavItems], (favItems) =>
  favItems.reduce((accumulator, favItem) => accumulator + favItem.count, 0)
);
