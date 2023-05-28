import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Login from './src/screens/Login';
import {colors, sizes} from './src/services';
import MainNavigator from './src/services/config/navigation';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Login /> */}
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
