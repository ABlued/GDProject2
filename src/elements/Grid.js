import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const { is_flex, width, margin, padding, bg, children, center, flex_direction } = props;

  const styles = {
      is_flex: is_flex,
      width: width,
      margin: margin,
      padding: padding,
      bg: bg,
      center: center,
      flex_direction: flex_direction,
  };
  return (
    <React.Fragment>
      <GridBox {...styles}>{children}</GridBox>
    </React.Fragment>
  );
};

Grid.defaultProps = {
  chidren: null,
  is_flex: false,
  width: null,
  padding: false,
  margin: false,
  bg: false,
  center: false,
  flex_direction:'row',
};

const GridBox = styled.div`
  width: ${(props) => props.width? props.width: '100%'};
  height: 100%;
  box-sizing: border-box;
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")}
  ${(props) =>
    props.is_flex
      ? `display: flex; align-items: center; justify-content: space-between; `
      : ""}
  flex-direction: ${props => props.flex_direction};
  ${(props) =>props.center? `text-align: center` : ""};
`;

export default Grid;
