import * as yup from "yup";

const regex = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$";

export const schema = yup.object().shape({
  email: yup
    .string()
    .email("Lütfen geçerli bir e-mail adresi giriniz")
    .required("Bu alanın doldurulması zorunludur"),
  age: yup
    .number()
    .min(18, "Yaşınız 18'den küçük olamaz")
    .max(100, "Yaşınız 100'den büyük olamaz")
    .integer("Lütfen tam sayı giriniz")
    .required("Bu alanın doldurulması zorunludur"),
  password: yup
    .string()
    .min(5, "Şifre en az 5 karakter olmalı")
    .matches(regex, "Şifreniz yeterince güçlü değil")
    .required("Bu alanın doldurulması zorunludur"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Şifreniz eşleşmiyor ")
    .required("Bu alanın doldurulması zorunludur"),
});
