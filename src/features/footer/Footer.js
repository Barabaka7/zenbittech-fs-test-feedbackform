import { FooterWrapper, Nav, NavElement, NavImage } from "./footerStyles";

export const Footer = () => {
  return (
    <FooterWrapper>
      <Nav>
        <NavElement>
          <NavImage src="/img/linkedin.png" />
        </NavElement>
        <NavElement>
          <NavImage src="/img/twitter.png" />
        </NavElement>
        <NavElement>
          <NavImage src="/img/fb.png" />
        </NavElement>
        <NavElement>
          <NavImage src="/img/pinterest.png" />
        </NavElement>
      </Nav>
    </FooterWrapper>
  );
};
