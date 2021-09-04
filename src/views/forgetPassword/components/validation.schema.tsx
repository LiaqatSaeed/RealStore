import Yup from 'yup';
const ValidationSchema = () => {
  const required = 'Required';
  const invalid_email = "Invalid Email Addredd";
  return Yup.object().shape({
    email: Yup.string().email(invalid_email).required(required),
  });
};
export default ValidationSchema;