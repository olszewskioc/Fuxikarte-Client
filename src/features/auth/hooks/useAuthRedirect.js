import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../authStore';

export const useAuthRedirect = () => {
  const userData = useAuthStore((state) => state.userData);
  const navigate = useNavigate();

  useEffect(() => {
    if (userData) {
      navigate('/');
    }
  }, [userData, navigate]);
};
