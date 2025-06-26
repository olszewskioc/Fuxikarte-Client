import { create } from "zustand";
import { persist } from "zustand/middleware";
import { useNavigate } from "react-router-dom";
import authService from './hooks/useAuthService'

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
    const user = useAuthStore((state) => state.userData);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    const handleLogin = async (userData) => {
        try {
            login(userData);
            navigate("/");
        } catch (error) {
            console.error("Falha no login:", error);
            throw error;
        }
    };

    const checkToken = async () => {
      if (user?.token) {
        const isValid = await authService.validateToken(user.token);
        if (!isValid) {
          logout();
        }
      }
    };


    return { handleLogout, handleLogin, checkToken };
};
