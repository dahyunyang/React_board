import React from "react";
import styled from "styled-components";

const Text = (props) =>{
    const {size, bold, color, children} = props;

    const styles = {
        size: size,
        bold: bold,
        color: color,
    };

    return(
        <React.Fragment>
            <P {...styles}>{children}</P>
        </React.Fragment>
    )
}

Text.defaultProps={
    children: null,
    size: "14px",
    bold: false,
    color: "#222831",
    
};

const P = styled.p`
    color : ${(props) => props.color};
    font-size : ${(props) => props.size};
    font-weight : ${(props) => (props.bold? "600":"400")};
`;
export default Text;