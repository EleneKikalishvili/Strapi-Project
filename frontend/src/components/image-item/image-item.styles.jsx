import styled from "styled-components";

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 650px;
  align-items: center;
  position: relative;
  margin-bottom: 30px;
  &:hover {
    .image {
      opacity: 0.7;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin: 5px;
  border: 1px solid black;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 22px;
  padding: 0 5px;
`;

export const DateContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const RatingContainer = styled.span`
  width: 10%;
  text-align: right;
`;
