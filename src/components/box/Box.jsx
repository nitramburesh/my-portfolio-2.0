import styled from "styled-components";

export const Box = (props) => {
  const StyledBox = styled.div`
    display: ${props.display ? props.display : "flex"};
    flex-wrap: wrap;
    background-color: ${props.bgColor ? props.bgColor : "black"};
    backdrop-filter: ${props.filter ? props.filter : "none"};
    margin: ${props.m ? props.m : "0"};
    padding: ${props.p ? props.p : "0"};
    height: ${props.h ? props.h : "100vh"};
    width: ${props.w ? props.w : "100vw"};
  `;

  return <StyledBox props={props} />;
};
