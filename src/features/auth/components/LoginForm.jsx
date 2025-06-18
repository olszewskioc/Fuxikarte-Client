import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useAuthActions } from "../authStore";
import authService from "../hooks/useAuthService";
import InputField from "../components/InputField";
import RoundButton from "../../../shared/components/RoundButton";
import { extractApiError } from "../../../shared/utils/ErrorHandler";

const validationSchema = Yup.object({
  username: Yup.string()
    .min(3, "Mínimo de 3 caracteres")
    .required("Campo obrigatório"),
  password: Yup.string()
    .min(6, "Mínimo de 6 caracteres")
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
      const { token, username, userId } = await authService.login(values);
      handleLogin({ token, username, userId });
    } catch (error) {
      console.error(error);
      setFormError(extractApiError(error) || "Erro ao fazer login.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '4rem', marginTop: '2rem'}}>
        <InputField
          name="username"
          type="text"
          autoComplete="username"
          borderRadius="50px"
        />
        <InputField
          name="password"
          type="password"
          autoComplete="current-password"
          borderRadius="50px"
        />

        {formError && (
          <div style={{ color: "red", marginTop: "8px" }}>{formError}</div>
        )}

        <RoundButton type="submit" disabled={isLoading} color="green" text={isLoading ? "Entrando..." : "Entrar"} />
      </Form>
    </Formik>
  );
};

export default LoginForm;
