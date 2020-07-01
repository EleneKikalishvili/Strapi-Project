import React from "react";
import ImageCollection from "../../components/image-collection/image-collection.component.jsx";
import Query from "../../components/query/index";

import CATEGORIES_QUERY from "../../queries/category/categories";

import {
  CollectionPageContainer,
  CollectionTitleContainer,
  ItemsContainer,
} from "./collection.styles.jsx";

function Collection() {
  return (
    <Query query={CATEGORIES_QUERY}>
      {({ data: { categories } }) => {
        return (
          <CollectionPageContainer>
            <CollectionTitleContainer>Collection</CollectionTitleContainer>
            <ItemsContainer>
              <ImageCollection categories={categories} />
            </ItemsContainer>
          </CollectionPageContainer>
        );
      }}
    </Query>
  );
}

export default Collection;
