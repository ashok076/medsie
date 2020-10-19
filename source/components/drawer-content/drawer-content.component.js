import React, {Component} from 'react';
import {View, Alert} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {
  Title,
  Drawer,
  Text,
  TouchableRipple,
  Avatar,
  Caption,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import Shops from '../../assets/svg-files/shops.svg';
import MedicalShops from '../../assets/svg-files/medical-shops.svg';
import Deliveries from '../../assets/svg-files/deliveries.svg';
import Doctors from '../../assets/svg-files/docto.svg';
import Events from '../../assets/svg-files/event.svg';


import styles from './drawer-content.style';

const DrawerComponent = ({navigation}) => {
  let name = 'name';
  return (
    <View style={styles.drawerContent}>
      <DrawerContentScrollView>
        <View style={styles.drawerContent}>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({color, size}) => (
              <Shops width={size} height={size} />
            )}
            label="Recreational Shops"
            onPress={() => navigation.navigate('Home')}
          />
          <DrawerItem
            icon={({color, size}) => (
              <MedicalShops width={size} height={size} />
            )}
            label="Medical Shops"
            onPress={() => navigation.navigate('Home')}
          />
          <DrawerItem
            icon={({color, size}) => (
              <Deliveries width={size} height={size} />
            )}
            label="Deliveries"
            onPress={() => navigation.navigate('Home')}
          />
          <DrawerItem
            icon={({color, size}) => (
              <Doctors width={size} height={size} />
            )}
            label="Doctors"
            onPress={() => navigation.navigate('Home')}
          />
          <DrawerItem
            icon={({color, size}) => (
              <Events width={size} height={size} />
            )}
            label="Events"
            onPress={() => navigation.navigate('Home')}
          />
        </Drawer.Section>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            label="Login"
            onPress={() => navigation.navigate('Home')}
          />
          <DrawerItem
            label="Register"
            onPress={() => navigation.navigate('Home')}
          />
          <DrawerItem
            label="List a store"
            onPress={() => navigation.navigate('Home')}
          />
          <DrawerItem
            label="Settings"
            onPress={() => navigation.navigate('Home')}
          />
          <DrawerItem
            label="Privacy Policy"
            onPress={() => navigation.navigate('Home')}
          />
          <DrawerItem
            label="About Medsie"
            onPress={() => navigation.navigate('Home')}
          />
        </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <Drawer.Item
          icon={({color, size}) => (
            <Icon name="logout" color={color} size={size} />
          )}
          label="Log Out"
          onPress={() => {
            navigation.closeDrawer();
          }}
        />
      </Drawer.Section>
    </View>
  );
};

export default DrawerComponent;
