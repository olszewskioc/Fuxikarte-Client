import { Box, Stack, IconButton, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
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

  const {handleLogout} = useAuthActions();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <IconButton onClick={() => handleLogout()} size='large' aria-label='Logout button'>
        <LogoutIcon/>
      </IconButton>
      <Stack spacing={4}>
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Box
              key={item.path}
              onClick={() => navigate(item.path)}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                cursor: 'pointer',
                color: isActive ? '#6F1123' : '#FFFFFF',
              }}
            >
              {isActive && <img src={'/polygons.svg'} alt={item.label} width={24} height={100} style={{borderRadius: '15px'}} />}
              <Typography>{item.label}</Typography>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
};

export default AsideMenu;
