import React from "react";
import ImageItem from "../image-item/image-item.component.jsx";

import {
  CollectionContainer,
  CollectionTitleContainer,
  ItemsContainer,
} from "./image-collection.styles.jsx";

function ImageCollection({ categories }) {
  return (
    <CollectionContainer>
      <ItemsContainer>
        {categories.map((category) => {
          return category.images
            .filter((image, idx) => idx < 4)
            .map((image) => <ImageItem image={image} key={image.id} />);
        })}
      </ItemsContainer>
    </CollectionContainer>
  );
}

export default ImageCollection;
