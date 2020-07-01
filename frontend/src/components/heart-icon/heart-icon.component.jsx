import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleDropdownHidden } from "../../redux/dropdown/dropdown.actions";
import { selectTotalCount } from "../../redux/dropdown/dropdown.selectors";

import {
  HeartIconContainer,
  Icon,
  ItemCountContainer,
} from "./heart-icon.styles.jsx";

function heartIcon({ toggleDropdownHidden, itemCount }) {
  return (
    <HeartIconContainer onClick={toggleDropdownHidden}>
      <Icon>&#10084;</Icon>
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </HeartIconContainer>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toggleDropdownHidden: () => dispatch(toggleDropdownHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectTotalCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(heartIcon);
