import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY ="@user_data";


const storeData = async (value,key) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(key || STORAGE_KEY , jsonValue)
    } catch (e) {
      // saving error
    }
  }

  const getData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key || STORAGE_KEY)
      if(value !== null) {
        // value previously stored
      }
    } catch(e) {
      // error reading value
    }
  }

  const removeData = async () => {
    try {
      await AsyncStorage.removeItem(key || STORAGE_KEY)
    } catch(e) {
      // remove error
    }
  
    console.log('Done.')
  }

  export {
      storeData,
      getData,
      removeData
  }