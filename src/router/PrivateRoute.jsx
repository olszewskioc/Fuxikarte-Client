import { Navigate } from "react-router-dom";
import useAuthStore from '../features/auth/authStore.js'
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
  const userData = useAuthStore((state) => state.userData);

  PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired
  }
  return userData ? children : <Navigate to="/login" />;
}


export default PrivateRoute;

