import api from "../../../lib/api";

const login = async ({ username, password }) => {
    const response = await api.post("/Auth/login", {
        username,
        password,
    });
    return response.data;
};

const validateToken = async (token) => {
    try {
        const res = await api.get("Auth/validate-token", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return res.status === 200;
    } catch (err) {
        console.error("Erro ao validar token:", err);
        return false;
    }
};

export default { login, validateToken };
