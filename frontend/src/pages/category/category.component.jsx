import React from "react";
import { useParams } from "react-router";

import Images from "../../components/category-images/category-images.component.jsx";

import Query from "../../components/query/index";
import CATEGORY_IMAGES_QUERY from "../../queries/category/images.js";

import {
  CategoryPageContainer,
  CategoryTitleContainer,
  ItemsContainer,
} from "./category.styles.jsx";

function Category() {
  let { id } = useParams();

  return (
    <Query query={CATEGORY_IMAGES_QUERY} id={id}>
      {({ data: { category } }) => {
        return (
          <CategoryPageContainer>
            <CategoryTitleContainer>{category.name}</CategoryTitleContainer>
            <ItemsContainer>
              <Images images={category.images} />
            </ItemsContainer>
          </CategoryPageContainer>
        );
      }}
    </Query>
  );
}
export default Category;
