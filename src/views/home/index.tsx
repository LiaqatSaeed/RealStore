import React, {useEffect} from 'react';
import {Text, View, Button} from 'react-native';
import {HOME} from '../../routing/constants';
import FacebookLogin from '../../integration/auth/facebook.login';
// import GoogleLogin from '../../integration/auth/google.login';
import FireStore from '../../integration/firestore/firestore.hoc';

const USERS_COLLECTION = "users"

interface HomeScreenProps {
  navigation: any;
  onSubmit: Function;
  auth?: any;
}



const HomeScreen = ({navigation, getAll}: any) => {

  const getAllUsers = async ()=>{
    
    let users = await getAll({name:USERS_COLLECTION});
    console.log("USERS",users)


  }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate(`${HOME} Details`)}
      />

      <Button
        title="Get ALL users Data"
        onPress={() => getAllUsers()}
      />

      <FacebookLogin
        title="Join with Facebook"
        onSubmit={(values: any) => console.log(values)}
      />
      {/* <GoogleLogin title="Join with Google" onSubmit={(values:any)=> console.log(values)}/> */}
    </View>
  );
};
export default FireStore(HomeScreen);
