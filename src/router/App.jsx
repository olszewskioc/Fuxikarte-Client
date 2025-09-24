import "../assets/styles/App.css";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Layout from "../shared/components/Layout";
import { useAuthActions } from "../features/auth/authStore";
import { useEffect } from "react";
import LoginPage from "../features/auth/pages/LoginPage";
import DashboardPage from "../features/dashboard/pages/DashboardPage";
import ProductsPage from "../features/products/pages/ProductsPage";
import Clients from "../features/clients/pages/Clientspage";
import Sales from "../features/sales/pages/SalesPage";

function App() {
    const { checkToken } = useAuthActions();
    useEffect(() => {
        checkToken();
    }, [checkToken]);
    return (
        <Layout>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route
                    path="/"
                    element={
                        <PrivateRoute>
                            <DashboardPage />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/produtos"
                    element={
                        <PrivateRoute>
                            <ProductsPage />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/vendas"
                    element={
                        <PrivateRoute>
                            <Sales />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/clientes"
                    element={
                        <PrivateRoute>
                            <Clients />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </Layout>
    );
}

export default App;
