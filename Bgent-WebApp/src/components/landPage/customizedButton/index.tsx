import React, { FC, ReactElement } from "react";
import styled from "styled-components";

interface IFullButtonProps {
    title: string,
    action?: () => void,
    border?: any
}

const FullButton: FC<IFullButtonProps> = (props: IFullButtonProps): ReactElement => {

    const { title, action, border } = props

    return (
        <Wrapper
            className="animate pointer radius8"
            onClick={ action}
            
        >
            {title}
        </Wrapper>
    );
}

const Wrapper = styled.button`
  border: 1px solid #7620ff
  background-color: "#7620ff";
  width: 100%;
  padding: 15px;
  outline: none;
  color:  "#fff"
  :hover {
    background-color: "#580cd2"
    border: 1px solid #7620ff;
    color: #7620ff" ;
  }
`;

export default FullButton