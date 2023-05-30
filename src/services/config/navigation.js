import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screens/Login';
import PhoneLogin from '../../screens/PhoneLogin';
import OTP from '../../screens/OTP';
import ProfileCreationPhone from '../../screens/ProfileCreationPhone';
import ProfileCreationFB from '../../screens/ProfileCreationFB';
import TopTrending from '../../screens/TopTrending';
const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="PhoneLogin" component={PhoneLogin} />
        <Stack.Screen name="OTP" component={OTP} />
        <Stack.Screen name="ProfileCreationPhone" component={ProfileCreationPhone} />
        <Stack.Screen name="ProfileCreationFB" component={ProfileCreationFB} />
        <Stack.Screen name="TopTrending" component={TopTrending} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
