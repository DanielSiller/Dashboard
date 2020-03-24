import React from "react";

import { MyContainer, MyBody } from "./styles";

export const Container = ({ children }) => (
  <MyContainer>{children}</MyContainer>
);

export const Body = ({ children }) => <MyBody>{children}</MyBody>;
