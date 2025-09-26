import {
  Box,
  Stack,
} from "@mui/material";
import PropTypes from "prop-types";

const ValueBox = ({children}) => {
  return (
    <Box sx={{boxShadow: '3', backgroundColor: "rgba(0,0,0,0.68)", height: '100%', borderRadius: '10px', display: 'flex', justifyContent: 'space-evenly'}}>
        <Stack alignItems={'center'}>
            <h2 style={{color: "#FFFFFF", fontWeight: 'bold'}}>{children}</h2>
            <p style={{color: "var(--accenture-color-alt)", fontWeight: 'bold', fontSize: '2rem', marginBottom: '1rem'}}>R$5.000,00</p>
        </Stack>
    </Box>
  )
};

ValueBox.propTypes = {
    children: PropTypes.node.isRequired
}

export default ValueBox