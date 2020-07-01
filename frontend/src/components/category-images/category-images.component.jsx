import React from "react";
import ImageItem from "../image-item/image-item.component.jsx";

import {
  CollectionContainer,
  ItemsContainer,
} from "./category-images.styles.jsx";
function ImageCollection({ images }) {
  return (
    <CollectionContainer>
      <ItemsContainer>
        {images.map((image) => {
          return <ImageItem image={image} key={image.id} />;
        })}
      </ItemsContainer>
    </CollectionContainer>
  );
}

export default ImageCollection;
