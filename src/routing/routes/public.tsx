import LoginScreen from '../../views/login';
import RegisterScreen from '../../views/register';
import ResetPasswordScreen from '../../views/resetPassword';
import ForgetPasswordScreen from '../../views/forgetPassword';
import { LOGIN, REGISTER, FORGET_PASSWORD, RESET_PASSWORD } from '../constants';

const PublicScreens = [
  {
    name: `${LOGIN}`,
    component: LoginScreen,
    key: LOGIN,
    options: {headerShown: false},
  },
  {
    name: REGISTER,
    component: RegisterScreen,
    key: REGISTER,
    options: {headerShown: false},
  },
  {
    name: FORGET_PASSWORD,
    component: ForgetPasswordScreen,
    key: FORGET_PASSWORD,
    options: {headerShown: false},
  },
  {
    name: RESET_PASSWORD,
    component: ResetPasswordScreen,
    key: RESET_PASSWORD,
    options: {headerShown: false},
  },
];

export default PublicScreens;
