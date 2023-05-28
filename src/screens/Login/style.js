import {Dimensions, StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  text: {
    fontSize: fontSize.h2,
    color: colors.black,
  },

  image: {
    height: sizes.screenHeight,
  },
  logo: {
    height: sizes.screenHeight * 0.3,
    width: sizes.screenWidth * 0.5,
    alignSelf: 'center',
  },

  container: {
    top: sizes.screenHeight * 0.17,
  },
  fbIcon: {
    height: sizes.screenHeight * 0.04,
    width: sizes.screenWidth * 0.04,
    alignSelf: 'center',
    left: sizes.screenWidth * 0.05,
  },
  googleIcon: {
    height: sizes.screenHeight * 0.03,
    width: sizes.screenWidth * 0.06,
    alignSelf: 'center',
    left: sizes.screenWidth * 0.05,
  },
  phoneIcon: {
    height: sizes.screenHeight * 0.04,
    width: sizes.screenWidth * 0.05,
    alignSelf: 'center',
    left: sizes.screenWidth * 0.05,
  },
  button: {
    flexDirection: 'row',
    height: sizes.screenHeight * 0.07,
    backgroundColor: colors.white,
    width: sizes.screenWidth * 0.62,
    alignSelf: 'center',
    borderRadius: sizes.screenWidth * 0.09,
    left: sizes.screenWidth * 0.05,
  },
  btnText: {
    color: colors.black,
    alignSelf: 'center',
    left: sizes.screenWidth * 0.2,
  },
  marginTop: {
    marginTop: sizes.screenHeight * 0.01,
  },
  top: {
    top: sizes.screenHeight * 0.01,
  },
  bottomView: {
    top: sizes.screenHeight * 0.2,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    left: sizes.screenWidth * 0.05,
  },
  orText: {
    color: colors.black,
    margin: sizes.screenWidth * 0.02,
  },
  row2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: sizes.screenWidth * 0.6,
    alignSelf: 'center',
    top: sizes.screenHeight * 0.22,
    left: sizes.screenWidth * 0.05,
  },
  socialIcon: {
    height: sizes.screenHeight * 0.069,
    width: sizes.screenWidth * 0.14,
  },
  appleIcon: {
    height: sizes.screenHeight * 0.08,
    width: sizes.screenWidth * 0.15,
    bottom: sizes.screenHeight * 0.01,
  },
  contentView: {
    alignItems: 'center',
    padding: sizes.screenWidth * 0.03,
    width: sizes.screenWidth * 0.95,
    top: sizes.screenHeight * 0.23,
    left: sizes.screenWidth * 0.03,
  },
  content: {
    color: colors.black,
    textAlign: 'center',
  },
});
