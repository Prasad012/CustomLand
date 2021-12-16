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
            title={title}
            border={border}
            className="animate pointer radius8"
            onClick={action}

        >
            {title}
        </Wrapper>
    );
}

const Wrapper = styled.button<IFullButtonProps>`
  border: 1px solid ${(props) => (props.border ? "#707070" : "#7620ff")};
  background-color: ${(props) => (props.border ? "transparent" : "#7620ff")};
  width: 100%;
  padding: 15px;
  outline: none;
  color: ${(props) => (props.border ? "#707070" : "#fff")};
  :hover {
    background-color: ${(props) => (props.border ? "transparent" : "#580cd2")};
    border: 1px solid #7620ff;
    color: ${(props) => (props.border ? "#7620ff" : "#fff")};
  }
`;


export default FullButton