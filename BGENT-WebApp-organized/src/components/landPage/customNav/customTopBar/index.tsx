import { FC, ReactElement, useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// import LogoIcon from "src/assets/svg/Logo";
import mainLogo from "src/assets/img/add/mainLogo.png"

const TopNavbar: FC = (): ReactElement => {
  const [y, setY] = useState(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);


  return (
    <>
      <Wrapper className="flexCenter animate whiteBg" style={y > 100 ? { height: "0px" } : { height: "80px" }}>
        <NavInner className="container flexSpaceCenter">
          <Link className="pointer flexNullCenter" to="home" smooth={true}>
            {/* <LogoIcon /> */}
            <img src={mainLogo} style={logoStyle}/>
            <h1 style={{ marginLeft: "15px" }} className="font20 extraBold">
              
            </h1>
          </Link>
          <UlWrapper className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="home" spy={true} smooth={true} offset={-80}>
                Home
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="services" spy={true} smooth={true} offset={-80}>
                Vision & Mission
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="projects" spy={true} smooth={true} offset={-80}>
                Projects
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="blog" spy={true} smooth={true} offset={-80}>
               Testimonial
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="about" spy={true} smooth={true} offset={-80}>
                About
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="contact" spy={true} smooth={true} offset={-80}>
                Contact
              </Link>
            </li>
          </UlWrapper>
          <UlWrapperRight className="flexNullCenter">
            <li className="semiBold font15 pointer flexCenter">
              <a href="/" className="radius8 " style={{ padding: "10px 15px",backgroundColor:"#7620FF",color:"white"}}>
              Log in
              </a>
            </li>
          </UlWrapperRight>
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;
const logoStyle={
  width:"70px",
  hight:"auto",
  borderRadius:'100px'

}

export default TopNavbar