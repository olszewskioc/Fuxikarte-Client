import PropTypes from 'prop-types';
import { Box } from "@mui/material";
import AsideMenu from "./AsideMenu";
import { Outlet } from "react-router-dom";

const Layout = () => {
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
                <Outlet />
            </Box>
        </Box>
    )
};

Layout.propTypes = {
    children: PropTypes.node
};

export default Layout;