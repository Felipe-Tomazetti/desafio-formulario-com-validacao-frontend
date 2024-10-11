import * as Yup from "yup";

const RegisterFormSchema = Yup.object({
  nome: Yup.string().required("Nome é obrigatório").min(2, "Nome muito curto"),
  email: Yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  idade: Yup.number()
    .required("Idade é obrigatória")
    .min(1, "Idade mínima é 1"),
  ocupacao: Yup.string().required("Ocupação é obrigatória"),
});

export default RegisterFormSchema;
