import { FC, ReactElement } from "react";
import styled from "styled-components";
import ProjectBox from "../../elements/projectBox";
import water from "src/assets/img/mission/water.png"
import energy from "src/assets/img/mission/energy.png"
import iot from "src/assets/img/mission/iotr.png"
import control from "src/assets/img/mission/control.png"
import service from "src/assets/img/mission/service.png"
import setup from "src/assets/img/mission/setup.png"
import money from "src/assets/img/mission/money.png"

const Vision : FC = () : ReactElement => {
  return (
    <Wrapper id="services">
      
      <div className="whiteBg" style={{ padding: "10px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">VISION & MISSION</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, s0.ed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper>
              <ProjectBox
                img={water}
                title="Save water"
                text="A drop of water is worth more than a sack of gold to a thirsty man."
                action={() => alert("clicked")}
              />
            </ServiceBoxWrapper>
            
            <ServiceBoxWrapper>
            <ProjectBox
                img={energy}
                title="Save Energy"
                text="A drop of oil burnt, is a bucket of glacier melted"
                action={() => alert("clicked")}
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
            <ProjectBox
                img={money}
                title="Save Money"
                text="Get the best product and best experience for the best price"
                action={() => alert("clicked")}
              />
            </ServiceBoxWrapper >
            <ServiceBoxWrapper>
            <ProjectBox
                img={iot}
                title="IOT Projects"
                text="The internet of things has the potential to change the world just as the internet did may be even more."
                action={() => alert("clicked")}
              />
            </ServiceBoxWrapper>
          </ServiceBoxRow>

          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper>
            <ProjectBox
                img={control}
                title="Moniter & Control"
                text="The best way to save things is to monitor and control and that is what we are doing."
                action={() => alert("clicked")}
              />
            </ServiceBoxWrapper>
            
            <ServiceBoxWrapper>
            <ProjectBox
                img={setup}
                title="Easy Installation"
                text="With existing setup, we can install our product without disturbing any circuits."
                action={() => alert("clicked")}
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
            <ProjectBox
                img={service}
                title="Best Service"
                text="We assure you of our best service at all times."
                action={() => alert("clicked")}
              />
            </ServiceBoxWrapper >
            <ServiceBoxWrapper>
            <ProjectBox
                img={money}
                title="Save water"
                text="Type: Automatic & Manual

                Features: Energy Saving, Resistant, Monitoring
                
                ."
                action={() => alert("clicked")}
              />            
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  margin-bottom:70px;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 10px 45px;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp2 = styled.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp3 = styled.div`
  width: 20%;
  margin-left: 40%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;

export default Vision