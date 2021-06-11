import styled from "styled-components";

export const Button = styled.button`
  height: 2rem;
  width: 10rem;
  font-family: "Raleway", sans-serif;
  font-size: 1rem;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  transition: 200ms ease;

  background: ${(props) => (props.add ? "#00B6BC" : "#71D5E4")};
  color: ${(props) => (props.add ? "white" : "black")};

  &:hover {
    background: ${(props) => (props.add ? "#71D5E4" : "#00B6BC")};
    color: ${(props) => (props.add ? "black" : "white")};
  }

  :active {
    transform: translateY(4px);
  }
`;

export const Image = styled.img`
  height: ${(props) => (props.product ? "11rem" : "")};
  width: ${(props) => (props.product ? "11rem" : "")};
  border-radius: ${(props) => (props.product ? "3px" : "")};
  grid-column: ${(props) => (props.cart ? "1/3" : "")};
`;

export const AppHeader = styled.h1`
  font-family: "Dancing Script", cursive;
  font-size: 3rem;
  margin-bottom: 2rem;

  @media (min-width: 992px) {
    font-size: 4rem;
  }
`;

export const MenuContainer = styled.div`
  @media (min-width: 1200px) {
    display: grid;
    place-items: center;
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

export const InfoContainer = styled.div`
  height: ${(props) => (props.product ? "11rem" : "")};
  transition: 200ms ease;

  :active {
    transform: ${(props) => (props.nav ? "translateY(4px)" : "")};
  }
`;

export const ProductName = styled.h3`
  font-size: 1.25rem;
`;

export const Info = styled.p`
  display: ${(props) => (props.link ? "none" : "")};
  color: ${(props) => (props.link ? "black" : "")};
  transition: ${(props) => (props.link ? "0.3s ease" : "")};
  font-style: ${(props) => (props.home ? "italic" : "")};
  width: ${(props) => (props.home ? "22rem" : "")};
  margin-left: ${(props) => (props.home ? "auto" : "")};
  margin-right: ${(props) => (props.home ? "auto" : "")};
  margin-bottom: ${(props) => (props.home ? "2rem" : "")};

  @media (min-width: 992px) {
    display: ${(props) => (props.link ? "block" : "")};
    text-decoration: ${(props) => (props.link ? "none" : "")};
  }

  &:hover {
    color: ${(props) => (props.link ? "#A1DBF1" : "")};
  }
`;

export const HomeBanner = styled.img`
  width: 90vw;
  margin-bottom: 1rem;
  border-radius: 3px;

  @media (min-width: 600px) {
    width: 35rem;
  }

  @media (min-width: 992px) {
    width: 45rem;
  }

  @media (min-width: 1200px) {
    width: 55rem;
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
  border-bottom: ${(props) => (props.primary ? "1px lightgray solid" : "none")};
  margin-bottom: ${(props) => (props.primary ? "2rem" : "none")};
  padding: ${(props) => (props.footer ? "1rem" : "none")};
  border-top: ${(props) => (props.footer ? "1px lightgray solid" : "none")};
  margin-top: ${(props) => (props.footer ? "3rem" : "none")};

  @media (min-width: 992px) {
    width: ${(props) => (props.primary ? "15rem" : "12rem")};
  }
`;
