import styled from "styled-components";

export const DropdownItemContainer = styled.div`
  display: flex;
  width: 100%;
  height: 65%;
  margin-bottom: 15px;
  padding: 10px;
`;

export const ImageContainer = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  border: 1px solid black;
  height: 95%;
  margin-bottom: 5px;
`;

export const FooterContainer = styled.div`
  display: flex;
  height: 5%;
  justify-content: space-between;
  font-size: 15px;
  padding: 0 5px;
`;

export const PublishedDate = styled.span`
  width: 90%;
`;

export const Rating = styled.span`
  width: 10%;
`;

export const RemoveIconContainer = styled.span`
  display: flex;
  align-items: center;
  margin-left: auto;
  font-size: 20px;
  cursor: pointer;
`;
