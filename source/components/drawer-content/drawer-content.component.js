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
              <Icon name="home" color={color} size={size} />
            )}
            label="Home"
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
