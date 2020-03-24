import React from "react";

import {
  Container,
  MyCard,
  MyLabel,
  MyOverviewContainer,
  MyImagensContainer
} from "./styles";

export const CardContainer = ({ children, ...props }) => (
  <Container {...props}>{children}</Container>
);

export const Card = ({ children, ...props }) => (
  <MyCard {...props}>{children}</MyCard>
);

export const Label = ({ children, ...props }) => (
  <MyLabel {...props}>{children}</MyLabel>
);

export const OverviewContainer = ({ children, ...props }) => (
  <MyOverviewContainer {...props}>{children}</MyOverviewContainer>
);

export const ImagensContainer = ({ children }) => (
  <MyImagensContainer>{children}</MyImagensContainer>
);
