import * as yup from "yup";

export const emailSchema = yup.object().shape({
  email: yup.string().email("Email Invalido").required(),
});

export const passwordSchema = yup.object().shape({
  password: yup.string().min(4).required(),
});
