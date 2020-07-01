import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Query from "../query/index.js";
import CATEGORIES_QUERY from "../../queries/category/categories";

import HeartIcon from "../heart-icon/heart-icon.component.jsx";
import Dropdown from "../dropdown/dropdown.component.jsx";
import { selectDropdownHidden } from "../../redux/dropdown/dropdown.selectors";

import {
  NavContainer,
  TitleLink,
  OptionsContainer,
  OptionLink,
} from "./nav.styles.jsx";

function Nav({ hidden }) {
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
              <HeartIcon />
            </OptionsContainer>
            {hidden ? null : <Dropdown />}
          </NavContainer>
        );
      }}
    </Query>
  );
}

const mapStateToProps = createStructuredSelector({
  hidden: selectDropdownHidden,
});

export default connect(mapStateToProps)(Nav);
