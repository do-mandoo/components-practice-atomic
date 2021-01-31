import styled, { css } from "styled-components";

const imgStyle = styled.div`
  ${props => props.carousalImg && css`
    width: 100%;
  `}
`;

const Imgs = ({src, alt, ...rest}) => {
  return <imgStyle src={src} {...rest} alt={alt} />
};

export default Imgs;