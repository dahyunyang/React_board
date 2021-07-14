import React from "react";
import styled from "styled-components";
import {Grid} from "./index";

const Button = (props) => {
    const{text, _onClick, children} = props; //부모로부터 변수를 받았다.

    return(
        <React.Fragment>
            {/* <ElButton onClick={_onClick}>{props.text}</ElButton> */}
            <ElButton onClick={_onClick}> {text? text: children} </ElButton>
        </React.Fragment>
    )
}

Button.defaultProps = {
    text: false,
    children: null,
    _onClick: () => {},
    is_float: false,
    margin: false,
    // width: '100%',
    padding: "12px 0px",

}

const ElButton = styled.button`
    width: 100%;
    background-color: #A4193D;
    color: #FFDFB9;
    padding: 12px 0px;
    box-sizing: border-box;
    border: none;
    border-radius: 3px;
`;



export default Button;