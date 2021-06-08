import styled from "styled-components";

export const Button = styled.button`
  height: 2rem;
  width: 10rem;
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
  margin-bottom: 1rem;
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

export const ProductInfo = styled.p``;

export const HomeBanner = styled.img`
  width: 100vw;
  margin-bottom: 1rem;
`;

export const NavIcon = styled.img`
  height: 2rem;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 40%;
  margin-left: auto;
  margin-right: auto;
  border-bottom: ${(props) => (props.primary ? "1px lightgray solid" : "none")};
`;

export const FooterIcon = styled.img`
  height: 2rem;
`;
