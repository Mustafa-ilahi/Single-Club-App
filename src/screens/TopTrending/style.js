import {Dimensions, StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: sizes.screenWidth * 0.03,
    top: sizes.screenHeight * 0.02,
  },
  heading: {
    color: colors.black,
    left: sizes.screenWidth * 0.05,
    fontSize: fontSize.h6,
    fontFamily: fontFamily.appTextLight,
    fontWeight: 'bold',
  },
  skipText: {
    color: colors.black,
  },
  rightArrow: {
    height: sizes.screenHeight * 0.01,
    width: sizes.screenWidth * 0.02,
  },
  profileCard: {
    paddingTop: sizes.screenHeight * 0.05,
    paddingLeft: sizes.screenHeight * 0.02,
    width: Dimensions.get('window').width / 3.2, //Device width divided in almost a half
  },
  profileImg: {
    height: sizes.screenHeight * 0.12,
    width: sizes.screenHeight * 0.12,
  },
  checkImage: {
    bottom: sizes.screenHeight * 0.018,
    height: sizes.screenHeight * 0.03,
    width: sizes.screenWidth * 0.065,
    left: sizes.screenWidth * 0.09,
  },
  levelIcon: {
    height: sizes.screenHeight * 0.03,
    width: sizes.screenWidth * 0.15,
    right: sizes.screenWidth * 0.05,
    bottom: sizes.screenHeight * 0.01,
  },
  levelView: {},
  title: {
    color: colors.black,
    fontSize: fontSize.smallM,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textView: {
    // top:sizes.screenHeight*0.006
  },
  top: {
    top: sizes.screenHeight * 0.006,
    left: sizes.screenWidth * 0.03,
  },
  userText: {
    color: colors.disabledBg2,
    left: sizes.screenWidth * 0.01,
    fontSize: fontSize.smallM,

  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paddingBottom: {
    paddingBottom: sizes.screenHeight * 0.1,
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
  absolute: {
    zIndex: 1,
    top: sizes.screenHeight * 0.03,
  },
  paddingBottom2:{

    paddingBottom: sizes.screenHeight * 0.05,
  }
});
