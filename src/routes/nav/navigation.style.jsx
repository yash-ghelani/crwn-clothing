import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 75px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 16px 0 0 30px;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 15px;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
