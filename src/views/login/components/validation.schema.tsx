import * as Yup from 'yup';
import {tc} from "../../../localization"
const email_invalid= tc("email_invalid");
const required = tc("required");

const ValidationSchema =  Yup.object().shape({
  email: Yup.string().email(email_invalid).required(required),
  password: Yup.string().required(required),
});
export default ValidationSchema;