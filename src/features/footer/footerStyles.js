import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const FooterWrapper = styled.div`
  box-sizing: border-box;
  position: absolute;
  bottom: -370px;
  width: 100%;
  height: 200px;
  background: url("/img/Footer.png") no-repeat;
  background-size: contain;
`;

export const Nav = styled.ul`
  position: relative;
  margin-left: 20%;
  margin-top: 5%;
`;

export const NavElement = styled.li`
  display: inline;
  margin: 0 15px;
`;
