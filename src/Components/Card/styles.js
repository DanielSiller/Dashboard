import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-gap: ${props => (props.gap ? `${props.gap}px` : "")};
  grid-template-columns: ${props =>
    props.gridTemplateColumns ? props.gridTemplateColumns : ""};
  grid-template-rows: ${props =>
    props.gridTemplateRows ? props.gridTemplateRows : ""};
  margin: ${props => (props.margin ? props.margin : "0")};
  margin-top: ${props => (props.marginTop ? `${props.marginTop}px` : "0")};
  border-radius: ${props => (props.radius ? `${props.radius}px` : "5px")};
  background-color: ${props =>
    props.background ? `#${props.background}` : ""};
  border: ${props => (props.border ? props.border : "1px solid #ddd")};
  padding: ${props => (props.padding ? `${props.padding}px` : "")};
  width: ${props => (props.width ? `${props.width}%` : "auto")};
  position: ${props => (props.position ? props.position : "initial")};
  align-items: ${props => (props.alignItems ? props.alignItems : "center")};
  box-shadow: ${props => (props.shadow ? props.shadow : "0 4px 4px #c5c5c5")};
  justify-items: ${props =>
    props.justifyItems ? props.justifyItems : "initial"};
  text-align: ${props => (props.textAlign ? props.textAlign : "initial")};
  min-height: ${props => (props.minHeight ? `${props.minHeight}%` : "")};

  .img {
    max-width: 60px;
  }
  .arrow {
    max-width: 30px;
    margin: 0 45px;
  }
  .image {
    max-width: 150px;
    min-height: 30px;
  }
`;

export const MyCard = styled.div`
  display: flex;
  flex-direction: ${props =>
    props.flexDirection ? props.flexDirection : "column"};
  align-items: ${props => (props.alignItems ? props.alignItems : "center")};
  text-align: center;
`;

export const MyLabel = styled.label`
  font-size: ${props => (props.fontsize ? `${props.fontsize}px` : "")};
  font-weight: ${props => (props.fontweight ? props.fontweight : "initial")};
  padding-top: ${props => (props.paddingTop ? `${props.paddingTop}px` : "0px")};
  margin-bottom: ${props =>
    props.marginbottom ? `${props.marginbottom}px` : "0px"};
  margin-top: ${props => (props.marginTop ? `${props.marginTop}px` : "0px")};
  color: ${props => (props.color ? `#${props.color}` : "#9d0d62")};
`;

export const MyOverviewContainer = styled.div`
  display: flex;
  flex-direction: ${props =>
    props.flexDirection ? props.flexDirection : "column"};
  border-radius: 5px;
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 10px;
  box-shadow: 0 4px 4px #c5c5c5;
  align-items: ${props => (props.alignItems ? props.alignItems : "")};
  text-align: ${props => (props.textAlign ? props.textAlign : "initial")};
  min-height: ${props => (props.minHeight ? `${props.minHeight}%` : "")};
  height: ${props => (props.height ? `${props.height}px` : "")};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : "initial"};
`;

export const MyImagensContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
