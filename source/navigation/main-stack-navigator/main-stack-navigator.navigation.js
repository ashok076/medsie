import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import DrawerNavigator from '../drawer-navigator/drawer-navigation.navigation';
import Login from '../../pages/login/login.page';
import Registration from '../../pages/registration/registration.page';
import ListPage from '../../pages/list-page/list-page.page';
import Listing from '../../pages/listing/listing.page';
import RegisterStore from '../../pages/register-store/register-store.page';
import EditStore from '../../pages/edit-store/edit-store.page';
import WriteReviews from '../../pages/write-reviews/write-reviews.page'

const Stack = createStackNavigator();

const MainStackNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Home" component={DrawerNavigator} />
    <Stack.Screen name="Registration" component={Registration} />
    <Stack.Screen name="RegisterStore" component={RegisterStore} />
    <Stack.Screen name="ListPage" component={ListPage} />
    <Stack.Screen name="EditStore" component={EditStore} />
    <Stack.Screen name="WriteReviews" component={WriteReviews} />
    <Stack.Screen name="Listing" component={Listing} />
  </Stack.Navigator>
);

export default MainStackNavigator;
