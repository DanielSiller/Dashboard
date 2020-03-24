import React from "react";
import { Container, Label } from "./styles";

const Header = ({ unidade, date, name }) => (
  <Container>
    <Label>{name}</Label>

    <Label>{unidade}</Label>

    <Label>{date}</Label>
  </Container>
);

export default Header;
