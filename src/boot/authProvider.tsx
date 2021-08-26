import React, { useState } from 'react';
const { Provider, Consumer } = React.createContext({ isLoggedIn: false });

const AuthProvider = ({ children }: any) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return <Provider value={{ isLoggedIn }}>{children}</Provider>;
};
export { Consumer as AuthConsumer };

export default AuthProvider;
