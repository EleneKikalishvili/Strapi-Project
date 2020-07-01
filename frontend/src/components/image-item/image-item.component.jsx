import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/dropdown/dropdown.actions";

import CustomButton from "../custom-button/custom-button.component.jsx";

import {
  CollectionItemContainer,
  ImageFooterContainer,
  BackgroundImage,
  DateContainer,
  RatingContainer,
} from "./image-item.styles.jsx";

function ImageItem({ image, addItem }) {
  return (
    <CollectionItemContainer>
      <BackgroundImage imageUrl={`http://localhost:1337${image.img.url}`} />
      <ImageFooterContainer>
        <DateContainer>{image.published_at}</DateContainer>
        <RatingContainer>{image.rating}&#10025;</RatingContainer>
      </ImageFooterContainer>
      <CustomButton onClick={() => addItem(image)} favourites>
        add to favorites
      </CustomButton>
    </CollectionItemContainer>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (image) => dispatch(addItem(image)),
});

export default connect(null, mapDispatchToProps)(ImageItem);
