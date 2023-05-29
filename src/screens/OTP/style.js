import {Dimensions, StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  buttonTop: {
    top: sizes.screenHeight * 0.05,
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
  timer: {
    color: colors.black,
    fontSize: fontSize.h6,
    textAlign: 'center',
  },
  timerTop: {
    top: sizes.screenHeight * 0.02,
  },
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {
    marginTop: sizes.screenHeight * 0.1,
    width: sizes.screenWidth * 0.9,
    padding: sizes.screenWidth * 0.05,
    alignSelf: 'center',
  },
  cell: {
    width: sizes.screenWidth * 0.15,
    height: 40,
    lineHeight: 38,
    fontSize: fontSize.h5,
    fontWeight:'500',
    borderBottomWidth: 1,
    borderColor: colors.disabledBg,
    textAlign: 'center',
    color: colors.black,
  },
  focusCell: {
    borderColor: '#000',
  },
});
