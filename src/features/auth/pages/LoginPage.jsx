import LoginForm from '../components/LoginForm';
import { useAuthRedirect } from '../hooks/useAuthRedirect';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const LoginPage = () => {
  useAuthRedirect();

  return (
    <section
      className="login-page"
      style={{
        display: 'flex',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box'
      }}
    >
      {/* LADO ESQUERDO - LOGIN */}
      <aside
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2rem',
          zIndex: 2
        }}
      >
        <LoginForm />
      </aside>

      {/* LADO DIREITO - IMAGEM DE FUNDO + LOGO */}
      <aside style={{ flex: 1, height: '100%' }}>
        <Paper
          elevation={4}
          sx={{
            height: '100%',
            width: '100%',
            borderRadius: '4px 0px 0px 4px',
            backgroundImage: 'url(/polygons.svg)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
              zIndex: 1
            }
          }}
        >
          <Box
            component="img"
            src="/logo.svg"
            alt="Logo Fuxikarte"
            sx={{
              width: '600px',
              height: 'auto',
              maxWidth: '80%',
              objectFit: 'contain',
              zIndex: 2
            }}
          />
        </Paper>
      </aside>
    </section>
  );
};

export default LoginPage;
