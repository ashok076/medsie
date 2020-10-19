import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import DrawerNavigator from '../drawer-navigator/drawer-navigation.navigation';
import Login from '../../pages/login/login.page';
import Registration from '../../pages/registration/registration.page';
import Listing from '../../pages/listing/listing.page';

const Stack = createStackNavigator();

const MainStackNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Listing" component={Listing} />
    <Stack.Screen name="Home" component={DrawerNavigator} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Registration" component={Registration} />
  </Stack.Navigator>
);

export default MainStackNavigator;
