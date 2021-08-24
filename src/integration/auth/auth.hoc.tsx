import React, {useState} from 'react';
import auth,{ FirebaseAuthTypes } from "@react-native-firebase/auth"

// First we need to add a type to let us extend the incoming component.
type BaseProps = {
  user: object;
};

export function Auth<P>(WrappedComponent: React.FC<P & BaseProps>) {

  const AuthBase = (props: P) => {
    const [user, setUser] = useState({});

    const onLogin = ()=>{
      
    }

    return <WrappedComponent {...props} auth={auth} user={user} />;
  };
  return AuthBase;
}
