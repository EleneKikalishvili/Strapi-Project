import React from "react";

import Query from "../query/index.js";
import CATEGORIES_QUERY from "../../queries/category/categories";

import {
  NavContainer,
  TitleLink,
  OptionsContainer,
  OptionLink,
} from "./nav.styles.jsx";

function Nav() {
  return (
    <Query query={CATEGORIES_QUERY} id={null}>
      {({ data: { categories } }) => {
        return (
          <NavContainer>
            <TitleLink to="/">STRAPI APP</TitleLink>
            <OptionsContainer>
              {categories.map((category, i) => {
                return (
                  <OptionLink key={category.id} to={`/${category.id}`}>
                    {category.name}
                  </OptionLink>
                );
              })}
            </OptionsContainer>
            <OptionsContainer>
              <OptionLink to="/">Sign In</OptionLink>
              <OptionLink to="/">&#10084;</OptionLink>
            </OptionsContainer>
          </NavContainer>
        );
      }}
    </Query>
  );
}

export default Nav;
