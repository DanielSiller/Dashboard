import React from "react";
import { Container, Label, MyLink } from "./styles";



const Header = ({ unidade, date, name, ...props }) => (
  <Container {...props}>
    <Label>{name}</Label>
    <MyLink to="/">
      <Label>{unidade}</Label>
    </MyLink>

    <Label>{date}</Label>
  </Container>
);

export default Header;
