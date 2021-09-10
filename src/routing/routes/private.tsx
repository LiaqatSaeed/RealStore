import HomeScreen from '../../views/home';
import SettingsScreen from '../../views/settings';
import HomeDetailsScreen from '../../views/homeDetails';
import SettingsDetailsScreen from '../../views/settingDetails';
import {HOME, SETTINGS} from '../constants';

const PrivateScreens = [
  {
    name: `${HOME}`,
    component: HomeScreen,
    key: HOME,
  },
  {
    name: `${HOME} Details`,
    component: HomeDetailsScreen,
    key: HOME,
  },
  {
    name: SETTINGS,
    component: SettingsScreen,
    key: SETTINGS,
  },
  {
    name: `${SETTINGS} Details`,
    component: SettingsDetailsScreen,
    key: SETTINGS,
  },
];

export default PrivateScreens;
