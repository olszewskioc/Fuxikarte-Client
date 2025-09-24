import { useState } from 'react';
import {
  Box,
  Stack,
  IconButton,
  Typography,
  Drawer,
  useMediaQuery,
  useTheme
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthActions } from '../../features/auth/authStore';

const menuItems = [
  { label: 'Home', path: '/' },
  { label: 'Produtos', path: '/produtos' },
  { label: 'Vendas', path: '/vendas' },
  { label: 'Clientes', path: '/clientes' },
];

const AsideMenu = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { handleLogout } = useAuthActions();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [open, setOpen] = useState(false);

  const menuContent = (
    <Box
      sx={{
        backgroundColor: "var(--primary-color)",
        display: "flex",
        flexDirection: "column",
        padding: "0px",
        gap: "2rem",
        width: "15rem",
        height: "100vh",
        alignItems: "flex-start",
      }}
    >
      <IconButton
        onClick={handleLogout}
        title='Logout'
        sx={{
          ariaLabel: "Logout button",
          width: "100%",
          margin: "1rem 0px",
        }}
      >
        <LogoutIcon sx={{ color: "#FFFFFF", width: "30px", height: "30px" }} />
      </IconButton>
      <Stack sx={{ margin: "2rem 0px" }} spacing={10}>
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;

          const handleNavigate = () => {
            navigate(item.path);
            if (isMobile) setOpen(false);
          };
          return (
            <Box
              key={item.path}
              role="button"
              tabIndex={0}
              aria-current={isActive ? "page" : undefined}
              onClick={() => {
                navigate(item.path);
                if (isMobile) setOpen(false);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();   // evita scroll no espaço
                  handleNavigate();     // dispara navegação
                }
              }}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                cursor: "pointer",
                color: isActive ? "var(--text-color)" : "#FFFFFF",
              }}
            >
              <Box sx={{ width: 25, height: 50, borderRadius: "25px", overflow: "hidden" }}>
                {isActive && (
                  <img
                    src="/polygons.svg"
                    alt={item.label}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                )}
              </Box>
              <Typography
                sx={{
                  fontWeight: isActive ? "bold" : "regular",
                  fontSize: "1.75em",
                }}
              >
                {item.label}
              </Typography>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );

  return (
    <>
      {isMobile ? (
        <>
          <IconButton
            onClick={() => setOpen(true)}
            sx={{ color: "#FFF", position: "absolute", top: 16, left: 16 }}
          >
            <MenuIcon />
          </IconButton>

          <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
            {menuContent}
          </Drawer>
        </>
      ) : (
        menuContent
      )}
    </>
  );
};

export default AsideMenu;
