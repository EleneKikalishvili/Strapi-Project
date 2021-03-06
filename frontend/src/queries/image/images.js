import gql from "graphql-tag";

const IMAGES_QUERY = gql`
  query Images {
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
`;

export default IMAGES_QUERY;
