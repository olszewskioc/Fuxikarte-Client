import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputField from "../components/InputField";
import { useAuthActions } from '../authStore';
import api from "../../../lib/api";

const validationSchema = Yup.object({
    email: Yup.string().email("E-mail inválido").required("Campo obrigatório"),
    password: Yup.string()
        .min(4, "Mínimo de 4 caracteres")
        .required("Campo obrigatório"),
});

const LoginForm = () => {
    const { handleLogin } = useAuthActions();
    const [formError, setFormError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (values) => {
        setFormError(null);
        setIsLoading(true);

        try {
            const response = await api.post("/login", {
                email: values.email,
                password: values.password,
            });

            const { token, user } = response.data;

            // Salva os dados no Zustand (e localStorage)
            handleLogin({ token, ...user });
        } catch (error) {
            console.error(error);
            setFormError(
                error.response?.data?.message ||
                    "Erro ao fazer login. Verifique suas credenciais."
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form>
                <InputField name="email" label="Email" type="text" />
                <InputField name="password" label="Senha" type="password" />

                {formError && (
                    <div style={{ color: "red", marginTop: "8px" }}>
                        {formError}
                    </div>
                )}

                <button
                    type="submit"
                    disabled={isLoading}
                    style={{ marginTop: "16px" }}
                >
                    {isLoading ? "Entrando..." : "Entrar"}
                </button>
            </Form>
        </Formik>
    );
};

export default LoginForm;
