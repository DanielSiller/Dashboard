import React from "react";

import Header from "../../Components/Header";
import { MyLink } from "../../Components/Header/styles";

import { CardContainer, OverviewContainer, Label } from "../../Components/Card";
import { Container, Body } from "../../Components/Container";

export default function Home() {
  return (
    <Container>
      <Header name="Pages" unidade="HOME" date="24/03/2020" />
      <Body>
        <CardContainer
          gridTemplateColumns="50% 50%"
          border="none"
          shadow="none"
          gap="25"
          marginTop="180"
          position="relative"
        >
          <MyLink to="/liop" cursor="pointer">
            <OverviewContainer
              alignItems="center"
              justifyContent="center"
              height="100"
            >
              <Label color="000" fontsize="20" fontweight="bold">
                LIOP
              </Label>
            </OverviewContainer>
          </MyLink>
          <MyLink to="/diario" cursor="pointer">
            <OverviewContainer
              alignItems="center"
              justifyContent="center"
              height="100"
            >
              <Label color="000" fontsize="20" fontweight="bold">
                Diario
              </Label>
            </OverviewContainer>
          </MyLink>
        </CardContainer>
      </Body>
    </Container>
  );
}
