import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import DropdownItem from "../dropdown-item/dropdown-item.component.jsx";
import { selectFavItems } from "../../redux/dropdown/dropdown.selectors";

import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessageContainer,
} from "./dropdown.styles.jsx";

function Dropdown({ favItems }) {
  return (
    <div>
      <CartDropdownContainer>
        <CartItemsContainer>
          {favItems.length ? (
            favItems.map((image) => (
              <DropdownItem key={image.id} favItem={image} />
            ))
          ) : (
            <EmptyMessageContainer>
              Your fav's list is empty
            </EmptyMessageContainer>
          )}
        </CartItemsContainer>
      </CartDropdownContainer>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  favItems: selectFavItems,
});

export default connect(mapStateToProps)(Dropdown);
