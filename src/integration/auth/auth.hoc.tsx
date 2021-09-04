import React, {useState} from 'react';
import auth,{ FirebaseAuthTypes } from "@react-native-firebase/auth"

// First we need to add a type to let us extend the incoming component.
interface BaseProps  {
  user: object;
};

export function withAuth<P>(WrappedComponent: React.FC<P & BaseProps>) {

  const AuthBase = (props: P) => {
    const [user, setUser] = useState({});

    auth().onAuthStateChanged((user) => {
      if(user) {
        setUser(user);
      }
    })

    return <WrappedComponent {...props} auth={auth} user={user} />;
  };
  return AuthBase;
}
