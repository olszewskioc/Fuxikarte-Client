import "../assets/styles/App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../features/auth/pages/LoginPage";
import DashboardPage from "../features/dashboard/pages/DashboardPage";
import PrivateRoute from "./PrivateRoute";
import { useAuthActions } from "../features/auth/authStore";
import { useEffect } from "react";

function App() {
    const { checkToken } = useAuthActions();
    useEffect(() => {
        checkToken();
    }, [checkToken]);
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <PrivateRoute>
                        <DashboardPage />
                    </PrivateRoute>
                }
            />
            <Route path="/login" element={<LoginPage />} />
        </Routes>
    );
}

export default App;
