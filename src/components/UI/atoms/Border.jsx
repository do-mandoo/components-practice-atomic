import styled, { css } from "styled-components";

const BorderStyle = styled.div`
  border-radius : 10px;
  ${props => props.carouselImg && css`
    width : 300px;
    height : 200px;
    border : 1px solid red;
  `}
  
  ${props => props.bigCarouselImg && css`
    min-width : 200px;
    max-width : 400px;
    width: 100%;

    height : 200px;
    border : 1px solid blue;
  `}

`


const Border = ({children, ...rest}) => {
  console.log(rest,111);
  return <BorderStyle {...rest}>{children}</BorderStyle>
};

export default Border;