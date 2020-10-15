import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import DrawerNavigator from '../drawer-navigator/drawer-navigation.navigation';
import Login from '../../pages/login/login.page'

const Stack = createStackNavigator();

const MainStackNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Home" component={DrawerNavigator} />
  </Stack.Navigator>
);

export default MainStackNavigator;
