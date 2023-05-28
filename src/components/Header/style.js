import {Dimensions, StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  headerView: {
    padding: sizes.screenHeight * 0.02,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    bottom: 0,
    zIndex: 0,
  },
  title: {
    color: colors.black,
    left: sizes.screenWidth * 0.05,
    fontSize: fontSize.h6,
    fontFamily: fontFamily.appTextLight,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
