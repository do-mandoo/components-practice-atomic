import React from "react";
import styled from "styled-components";
import Border from "../atoms/Border";
import Imgs from "../atoms/Imgs";
import TextStyled from "../atoms/Text";

const Wrap = styled.div`
  display: inline-block;
  width : 792px;
  height : 266px;
  padding : 40px;
  box-sizing : border-box;
  border-bottom : 1px solid #ebebeb;
  /* margin-bottom : 4px; */
  display : flex;
  justify-content : space-between;
  /* margin : 0 auto; */
  .TextWrap{
    width : 476px;
    height :200px;
    margin-left : 16px;
  }
`


const LodgingLists = ({src, alt, ...rest}) => {
  return(
    <Wrap className="listWrap">
      <Border carouselImg><Imgs src={src} alt={alt} {...rest} /></Border>
      <div className='TextWrap'>
        <TextStyled size='blackSmall'>jinjin의 아파트 전체</TextStyled>
        <TextStyled size='blackSmall'>동서남북역 도보1분/아파트전체/호텔급 풀옵션/반려동물 불가/금연 존</TextStyled>
        <TextStyled size='blackSmall'>최대 인원 4명. 침실2개. 침대 4개. 욕실 1개</TextStyled>
        <TextStyled size='blackSmall'>주차. 난방. 무선인터넷</TextStyled>
      </div>
    </Wrap>
  )
}

export default LodgingLists;