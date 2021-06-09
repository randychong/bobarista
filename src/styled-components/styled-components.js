import styled from "styled-components";

export const Button = styled.button`
  height: 2rem;
  width: 10rem;
  font-family: "Raleway", sans-serif;
  font-size: 16px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  transition: 0.3s ease;

  background: ${(props) => (props.add ? "#00B6BC" : "#71D5E4")};
  color: ${(props) => (props.add ? "white" : "black")};

  &:hover {
    background: ${(props) => (props.add ? "#71D5E4" : "#00B6BC")};
    color: ${(props) => (props.add ? "black" : "white")};
  }
`;

export const ProductImage = styled.img`
  height: 11rem;
  width: 11rem;
  border-radius: 3px;
`;

export const AppHeader = styled.h1`
  font-family: "Dancing Script", cursive;
  font-size: 40px;
  margin-bottom: 1rem;

  @media (min-width: 992px) {
    font-size: 50px;
  }
`;

export const MenuContainer = styled.div`
  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 70rem;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const MenuCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px lightgray solid;

  @media (max-width: 599px) {
    width: 24rem;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 600px) {
    width: 36rem;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 1200px) {
    width: 30rem;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const MenuInfo = styled.div`
  height: 11rem;
`;

export const ProductName = styled.h3`
  font-size: 20px;
`;

export const Info = styled.p`
  display: ${(props) => (props.link ? "none" : "")};
  color: ${(props) => (props.link ? "black" : "")};
  transition: ${(props) => (props.link ? "0.3s ease" : "")};

  @media (min-width: 992px) {
    display: ${(props) => (props.link ? "block" : "")};
    text-decoration: ${(props) => (props.link ? "none" : "")};
  }

  &:hover {
    color: ${(props) => (props.link ? "#A1DBF1" : "")};
  }
`;

export const HomeInfo = styled.p`
  font-style: italic;
`;

export const HomeBanner = styled.img`
  width: 90vw;
  margin-bottom: 1rem;
  border-radius: 3px;

  @media (min-width: 992px) {
    width: 80vw;
  }

  @media (min-width: 1200px) {
    width: 60vw;
  }
`;

export const NavIcon = styled.img`
  height: ${(props) => (props.primary ? "2rem" : "1.5rem")};
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: ${(props) => (props.primary ? "10rem" : "8rem")};
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
  border-bottom: ${(props) => (props.primary ? "1px lightgray solid" : "none")};

  @media (min-width: 992px) {
    width: ${(props) => (props.primary ? "15rem" : "12rem")};
  }
`;
