import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  border-bottom: 1px solid black;
`;

export const TitleLink = styled(Link)`
  width: 20%;
  padding: 15px;
  font-size: 40px;
  display: flex;
  align-items: center;
`;

export const OptionsContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  font-size: 25px;
  text-transform: capitalize;
  cursor: pointer;
`;
