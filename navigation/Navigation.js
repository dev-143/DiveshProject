 import React from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenOne from '../screens/ScreenOne';
import ScreenFour from '../screens/ScreenFour';

 const Stack = createNativeStackNavigator();
 
 const Navigation = () => {
   return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="ScreenOne" component={ScreenOne} />
        <Stack.Screen name="ScreenFour" component={ScreenFour} />
      </Stack.Navigator>
    </NavigationContainer>
   );
 };

 
 export default Navigation;
 