import { Navigate } from "react-router-dom";
import useAuthStore from '../features/auth/authStore.js'
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
  const userData = useAuthStore((state) => state.userData);

  PrivateRoute.PropTypes = {
    children: PropTypes.node.isRequired
  }
  return userData ? children : <Navigate to="/login" />;
}

PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired
}

export default PrivateRoute;

