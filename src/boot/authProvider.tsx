import React, {useState} from 'react';
import styles from '../styles';
import {setData} from '../utils/helper';
import {HOME} from '../routing/constants';

const {Provider, Consumer} = React.createContext({
  isLoggedIn: false,
  loginHandler: (prop: any) => {},
  theme: {active_color: 'red'},
  styles,
});

const AuthProvider = ({children, navigation}: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [theme, setTheme] = useState({
    active_color: 'red',
  });

  const loginHandler = ({values, navigation}: any): void => {
   // setData(values);
    setIsLoggedIn(true);
    navigation.navigate(HOME);
  };

  return (
    <Provider value={{loginHandler: loginHandler, isLoggedIn, theme, styles}}>
      {children}
    </Provider>
  );
};
export {Consumer as AuthConsumer};

export default AuthProvider;
