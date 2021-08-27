import React, { useState } from 'react';
import styles from '../styles';
const { Provider, Consumer } = React.createContext({ isLoggedIn: false, theme: { active_color: "red" } ,styles});

const AuthProvider = ({ children }: any) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [theme, setTheme] = useState({
        active_color: "red"
    })

    return <Provider value={{ isLoggedIn, theme ,styles}}>{children}</Provider>;
};
export { Consumer as AuthConsumer };

export default AuthProvider;
