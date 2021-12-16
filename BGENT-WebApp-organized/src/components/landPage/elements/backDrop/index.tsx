import React, { FC, ReactElement } from "react";
import styled from "styled-components";

interface IBackDropProps {
  sidebarOpen:boolean;
  toggleSidebar: (present:boolean) => void,
}

const Backdrop:FC <IBackDropProps>=(props: IBackDropProps) :ReactElement=>{
  
  const { sidebarOpen, toggleSidebar } = props

  return <Wrapper className="darkBg" onClick={() => toggleSidebar(sidebarOpen)}></Wrapper>;
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  opacity: 0.8;
`;
export default Backdrop