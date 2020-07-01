import React from "react";

import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessageContainer,
} from "./dropdown.styles.jsx";

function Dropdown() {
  return (
    <div>
      <CartDropdownContainer>
        <CartItemsContainer>
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        </CartItemsContainer>
      </CartDropdownContainer>
    </div>
  );
}

export default Dropdown;

// {
//   cartItems.length ? (
//     cartItems.map((cartItem) => (
//       <CartItem key={cartItem.id} item={cartItem} />
//     ))
//   ) : (
//     <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
//   )
// }
