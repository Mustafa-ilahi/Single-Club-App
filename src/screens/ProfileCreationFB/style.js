import {Dimensions, StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  paddingTop: {
    padding: sizes.screenHeight * 0.02,
    paddingTop: sizes.screenHeight * 0.08,
  },
  welcomeHead: {
    color: colors.black,
    fontSize: fontSize.h4,
    paddingBottom: sizes.screenHeight * 0.02,
  },
  text: {
    color: colors.gray,
    fontSize: fontSize.h6,
    fontWeight: '300',
  },
  top: {
    marginTop: sizes.screenHeight * 0.03,
  },
  profile: {
    height: sizes.screenHeight * 0.1,
    width: sizes.screenWidth * 0.2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    color: colors.black,
  },
  left: {
    paddingLeft: sizes.screenWidth * 0.2,
  },
  top2: {
    top: sizes.screenHeight * 0.03,
  },
  input: {
    // borderBottomWidth:1,
    // borderColor:'gray',
    fontSize: fontSize.h6,
    color: colors.black,
  },
  inputLabel: {
    color: colors.label,
    top: sizes.screenHeight * 0.005,
    left: sizes.screenWidth * 0.01,
  },
  line: {
    width: sizes.screenWidth * 0.9,
  },
  countryTop: {
    top: sizes.screenHeight * 0.05,
  },
  countryView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: sizes.screenHeight * 0.01,
    paddingBottom: sizes.screenHeight * 0.02,
  },
  inputTop: {
    top: sizes.screenHeight * 0.07,
  },
  inputTop2: {
    top: sizes.screenHeight * 0.1,
  },
  buttonView: {
    backgroundColor: colors.secondary,
    padding: sizes.screenHeight * 0.02,
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
    borderRadius: sizes.screenWidth * 0.09,
  },
  buttonText: {
    textAlign: 'center',
    color: colors.white,
    fontSize: fontSize.h6,
  },
  buttonTop: {
    top: sizes.screenHeight * 0.15,
  },
});
