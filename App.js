import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Login from './src/screens/Login';
import {colors, sizes} from './src/services';
import MainNavigator from './src/services/config/navigation';
import SplashScreen from 'react-native-splash-screen';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={styles.container}>
      <MainNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: sizes.screenHeight,
  },
});
