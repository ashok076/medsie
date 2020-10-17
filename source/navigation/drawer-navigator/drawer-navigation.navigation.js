import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import DrawerComponent from '../../components/drawer-content/drawer-content.component';
import Home from '../../pages/home/home.page';
import RegisterStore from '../../pages/register-store/register-store.component';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home" drawerContent={(prop) => <DrawerComponent {...prop} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="RegisterStore" component={RegisterStore} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
