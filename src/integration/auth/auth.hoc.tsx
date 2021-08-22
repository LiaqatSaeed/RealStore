import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';

// First we need to add a type to let us extend the incoming component.
type BaseProps = {
  extraInfo: string;
};

export function Auth<P>(WrappedComponent: React.FC<P & BaseProps>) {
  const [extraInfo, setExtraInfo] = useState('');
  const AuthBase = (props: P) => {


    const onLogin = ()=>{
      
    }

    return <WrappedComponent {...props} auth={auth} extraInfo={extraInfo} />;
  };
  return AuthBase;
}
