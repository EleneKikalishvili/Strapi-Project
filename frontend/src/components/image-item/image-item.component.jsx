import React from "react";

import CustomButton from "../custom-button/custom-button.component.jsx";

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  BackgroundImage,
  DateContainer,
  RatingContainer,
} from "./image-item.styles.jsx";

function ImageItem({ image }) {
  return (
    <CollectionItemContainer>
      <BackgroundImage imageUrl={`http://localhost:1337${image.img.url}`} />
      <CollectionFooterContainer>
        <DateContainer>{image.published_at}</DateContainer>
        <RatingContainer>{image.rating}&#10025;</RatingContainer>
      </CollectionFooterContainer>
      <CustomButton favourites>add to favorites</CustomButton>
    </CollectionItemContainer>
  );
}

export default ImageItem;
