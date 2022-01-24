import * as yup from "yup";

export const userSchema = yup.object().shape({
  email: yup.string().email("Email Invalido").required(),
});

export const testeUserSchema = yup.object().shape({
  password: yup.string().min(4).required(),
});
