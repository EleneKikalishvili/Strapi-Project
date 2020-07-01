import gql from "graphql-tag";

const CATEGORIES_QUERY = gql`
  query Categories {
    categories {
      id
      name
      images {
        id
        like
        published_at
        rating
        img {
          url
        }
      }
    }
  }
`;

export default CATEGORIES_QUERY;
