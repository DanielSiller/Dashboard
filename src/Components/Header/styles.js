import styled from "styled-components";

export const Container = styled.div`
  background-color: #9d0d62;
  height: ${props => (props.height ? `${props.height}%` : "25%")};
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: ${props => (props.padding ? props.padding : "40px 80px")};
  position: absolute;
`;

export const Label = styled.label`
  font-weight: bold;
  color: #fff;
`;
