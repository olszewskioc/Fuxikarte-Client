import useAuthStore from '../../auth/authStore';

const Dashboard = () => {
  const userData = useAuthStore((state) => state.userData);
  const logout = useAuthStore((state) => state.logout);

  return (
    <div>
      <h1>Bem-vindo, {userData?.name}!</h1>
      <button onClick={logout}>Sair</button>
    </div>
  );
};

export default Dashboard;
