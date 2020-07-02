import gql from "graphql-tag";

const CATEGORY_IMAGES_QUERY = gql`
  query Category($id: ID!) {
    category(id: $id) {
      name
      id
      images {
        id
        img {
          url
        }
        published_at
        categories {
          id
          name
        }
        rating
      }
    }
  }
`;

export default CATEGORY_IMAGES_QUERY;
