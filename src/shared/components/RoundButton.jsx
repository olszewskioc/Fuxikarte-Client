// import React from 'react'
import { Button } from "@mui/material";
import PropTypes from "prop-types";

const RoundButton = ({ type, text, color, handleClick }) => {
    return (
        <Button
            type={type}
            variant="contained"
            sx={{
                fontWeight: "bold",
                color: "#ffffff",
                borderRadius: "50px",
                backgroundColor: color === "green" ? "#7CB691" : "#B70F23",
                height: '4rem'
            }}
            color={color}
            onClick={handleClick}
        >
            {text}
        </Button>
    );
};

// propTypes
RoundButton.propTypes = {
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    handleClick: PropTypes.func,
};

export default RoundButton;
