import React from "react";
import { connect } from "react-redux";

import { removeItem } from "../../redux/dropdown/dropdown.actions";

import {
  DropdownItemContainer,
  ImageContainer,
  Image,
  FooterContainer,
  PublishedDate,
  Rating,
  RemoveIconContainer,
} from "./dropdown-item.styles.jsx";

function DropdownItem({ favItem, removeItem }) {
  const { img, rating, published_at } = favItem;
  const imageUrl = `http://localhost:1337${img.url}`;
  return (
    <DropdownItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt="image" />
        <FooterContainer>
          <PublishedDate>{published_at}</PublishedDate>
          <Rating>{rating}&#10025;</Rating>
        </FooterContainer>
      </ImageContainer>
      <RemoveIconContainer onClick={() => removeItem(favItem)}>
        &#10005;
      </RemoveIconContainer>
    </DropdownItemContainer>
  );
}

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(DropdownItem);
