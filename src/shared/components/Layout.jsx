import PropTypes from 'prop-types';
import { Box } from "@mui/material";
import AsideMenu from "./AsideMenu";

const Layout = ({children}) => {
    Layout.propTypes = {
    children: PropTypes.node.isRequired
  }
    return (
        <Box sx={{display: 'flex', height: '100vh'}}>
            <AsideMenu />
            <Box
            component="main"
            sx={{
                flex: 1,
                padding: "2rem",
                overflowY: "auto",
                backgroundColor: "var(--background-color)"
            }}>
                {children}
            </Box>
        </Box>
    )
};

export default Layout;