import {
  StyleSheet
} from 'react-native';
import colors from '../common/color';

export const FONT_FAMILY = "DM Sans";

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  bgColor: {
    backgroundColor: colors.active
  },
  h1: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: FONT_FAMILY,
    marginBottom: 10
  },
  boxShadow: {
    shadowOpacity: 0.15,
    shadowRadius: 5,
    shadowColor: colors.black,
    shadowOffset: { height: 6, width: 0 }
  }
});

export default styles;