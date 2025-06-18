import api from "../../../lib/api";

const login = async ({ username, password }) => {
  console.log('Enviando login para /Auth/login', { username, password });
  const response = await api.post("/Auth/login", {
    username,
    password,
  });
  console.log('Resposta da API:', response.data);
  return response.data;
};

export default { login };
