import React from "react";
import { Container, Label } from "./styles";

const Header = ({ unidade, date, name, ...props }) => (
  <Container {...props}>
    <Label>{name}</Label>

    <Label>{unidade}</Label>

    <Label>{date}</Label>
  </Container>
);

export default Header;
