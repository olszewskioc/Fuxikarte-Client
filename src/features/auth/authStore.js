import { create } from "zustand";
import { persist } from "zustand/middleware";
import { useNavigate } from "react-router-dom";

const useAuthStore = create(
  persist(
    (set) => ({
      userData: null,
      login: (data) => set({ userData: data }),
      logout: () => set({ userData: null }),
    }),
    {
      name: "fuxikarte-auth", // chave no localStorage
      partialize: (state) => ({ userData: state.userData }), // evita salvar funções
    }
  )
);

export default useAuthStore;


// ACTIONS

export const useAuthActions = () => {
  const logout = useAuthStore((state) => state.logout);
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleLogin = async (userData) => {
    try {

      login(userData);
      navigate('/');
    } catch (error) {
      // Trate o erro aqui (toast, alert, etc)
      console.error('Falha no login:', error);
      throw error;
    }
  };

  return { handleLogout, handleLogin };
};