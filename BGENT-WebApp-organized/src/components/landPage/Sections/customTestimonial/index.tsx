import {FC, ReactElement} from "react";
import ClientSlider from "src/components/landPage/elements/clientSider";
import styled from "styled-components";
import TestimonialSlider from "src/components/landPage/elements/testimonialSlider";

const Blog: FC = () : ReactElement =>  {
  return (
    <Wrapper id="blog">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Customers</h1>
          </HeaderInfo>
          <div className="lightBg" style={{ padding: "50px 0" }}>
              <div className="container">
               <ClientSlider />
              </div>
           </div>
        </div>
      </div>

      <div className="lightBg" style={{padding: '50px 0'}}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">What They Say?</h1>
          </HeaderInfo>
          <TestimonialSlider />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
  margin-bottom:30px
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;

const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;


export default Blog