import LoginForm from '../components/LoginForm';
import { useAuthRedirect } from '../hooks/useAuthRedirect';

const LoginPage = () => {
  useAuthRedirect();

  return (
    <div className="login-page">
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
