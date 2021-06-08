import styled from "styled-components";

export const Button = styled.button`
  height: 2rem;
  width: 10rem;
  margin-top: 1.8rem;
  font-family: "Raleway", sans-serif;
  font-size: 16px;
  border-radius: 3px;
  border: none;

  background: ${(props) => (props.add ? "#00B6BC" : "#71D5E4")};
  color: ${(props) => (props.add ? "white" : "black")};
`;

export const ProductImage = styled.img`
  height: 10rem;
  width: 10rem;
  border-radius: 3px;
`;

export const AppHeader = styled.h1`
  font-family: "Dancing Script", cursive;
  font-size: 40px;
`;

export const MenuCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px lightgray solid;
`;

export const MenuInfo = styled.div`
  height: 10rem;
`;

export const ProductName = styled.h3`
  font-size: 20px;
`;

export const ProductPrice = styled.p``;
