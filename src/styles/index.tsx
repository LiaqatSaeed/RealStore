import {
    StyleSheet
} from 'react-native';
import colors from '../common/color';

export const FONT_FAMILY="DM Sans";

const styles = StyleSheet.create({
    container: {
      padding:10
    },
    bgColor:{
      backgroundColor:colors.active
    },
    h1:{
      fontSize:20,
      fontWeight:"bold",
      fontFamily:FONT_FAMILY,
      marginBottom:10
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
  });
  
  export default styles;