import React from 'react';
import {StyledButton} from "./button.styles";
import PropTypes from "prop-types";

export const Button = (props) => (
    <StyledButton {...props}>
        {props.children}
    </StyledButton>
)

Button.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
};