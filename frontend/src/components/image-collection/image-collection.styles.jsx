import styled from "styled-components";

export const CollectionContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const CollectionTitleContainer = styled.h2`
  font-size: 30px;
  margin: 0 auto 30px;
`;

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
`;
