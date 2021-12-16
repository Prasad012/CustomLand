import React, { FC, ReactElement } from "react";
import styled from "styled-components";
import FullButton from "src/components/landPage/customizedButton";
import HeaderImage from "src/assets/img/header-img.jpeg";
import QuotesIcon from "src/assets/svg/Quotes";
import Dots from "src/assets/svg/Dots";

const Header: FC = () : ReactElement => {
  return (
    <Wrapper id="home" className="container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <div>
          <h1 className="extraBold font40">We work for climate change and environmental safety</h1>
          <HeaderP className="font20 semiBold">
            We work till zero wastage of water and electricity is achived in this earth and save environment
          </HeaderP>
            {/* <typeEffect >
              <div>This is a typing demo.</div>
            </typeEffect> */}
          <BtnWrapper>
            <FullButton title="View more" />
          </BtnWrapper>
        </div>
      </LeftSide>
      <RightSide>
        <ImageWrapper>
        <Img className="radius8" src={HeaderImage} alt="office" style={{zIndex: 9}} />
          <QuoteWrapper className="flexCenter darkBg radius8">
            <QuotesWrapper>
              <QuotesIcon />
            </QuotesWrapper>
            <div>
              <p className="font15 whiteColor">
                <em>"Environment is no one's property to destroy it's everyones's responsibility to protect."</em>
              </p>
              <p className="font13 orangeColor textRight" style={{marginTop: '10px'}}>PG Ragavandir</p>
            </div>
          </QuoteWrapper>
          <DotsWrapper>
          <Dots />
          </DotsWrapper>
        </ImageWrapper>
        <GreyDiv className="lightBg"></GreyDiv>
      </RightSide>
    </Wrapper>
  );
}
const Headerimg={
  zIndex: '9',
  width:'100%',
  hight:'auto' 
}

const typeEffect=styled.div`
 
`;


const Wrapper = styled.section`
  padding-top: 10px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
const HeaderP = styled.div`


width: 87ch;
animation: typing 10s steps(87), blink .5s step-end infinite alternate;
white-space: nowrap;
overflow: hidden;
border-right: 3px solid;
font-family: monospace;
font-size: 2em;

@keyframes typing {
from {
  width: 0
}
}
  
@keyframes blink {
50% {
  border-color: transparent
}
}

  max-width: 470px;
  padding: 15\px 0 30px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;
const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
const GreyDiv = styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;
const Img = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;
const QuoteWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 50px;
  max-width: 330px;
  padding: 30px;
  z-index: 99;
  @media (max-width: 960px) {
    left: 20px;
  }
  @media (max-width: 560px) {
    bottom: -50px;
  }
`;
const QuotesWrapper = styled.div`
  position: absolute;
  left: -20px;
  top: -10px;
`;
const DotsWrapper = styled.div`
  position: absolute;
  right: -100px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;


export default Header