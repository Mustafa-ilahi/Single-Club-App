import {Dimensions, StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  countryName: {
    color: colors.black,
  },
  countryView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: sizes.screenHeight * 0.01,
    paddingBottom: sizes.screenHeight * 0.02,
  },
  top: {
    top: sizes.screenWidth * 0.1,
    padding: sizes.screenWidth * 0.07,
  },
  label: {
    color: colors.label,
  },
  line: {
    width: sizes.screenWidth * 0.9,
  },
  top2: {
    padding: sizes.screenWidth * 0.07,
  },
  input: {
    // borderBottomWidth:1,
    // borderColor:'gray',
    color: colors.black,
  },
  checkImage: {
    bottom: sizes.screenHeight * 0.05,
    alignSelf: 'flex-end',
  },
  buttonView: {
    backgroundColor: colors.secondary,
    padding: sizes.screenHeight * 0.02,
    width: sizes.screenWidth * 0.8,
    alignSelf: 'center',
    borderRadius: sizes.screenWidth * 0.09,
  },
  buttonText: {
    textAlign: 'center',
    color: colors.white,
    fontSize: fontSize.h6,
  },
  row2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: sizes.screenWidth * 0.6,
    alignSelf: 'center',
    top: sizes.screenHeight * 0.23,
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
  blackText: {
    color: colors.black,
  },
  textTop: {
    top: sizes.screenHeight * 0.2,
    alignItems: 'center',
  },
});
