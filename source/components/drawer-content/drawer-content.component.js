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

const DrawerComponent = ({navigation, userData}) => {
  let name = 'name';
  let access_token = null;
  console.log('Draewr: ', userData);
  if (userData && userData.userData) {
    name = userData.userData.fullname;
    access_token = userData.userData.access_token;
  }
  return (
    <View style={styles.drawerContent}>
      <DrawerContentScrollView>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={styles.avatarView}>
              <Avatar.Image
                source={{
                  uri: 'https://api.adorable.io/avatars/285/10@adorable.io.png',
                }}
                size={50}
              />
              <View style={styles.userInfoView}>
                <Title style={styles.title}>{name}</Title>
              </View>
            </View>
          </View>
        </View>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="home" color={color} size={size} />
            )}
            label="Home"
            onPress={() => navigation.navigate('Home')}
          />
        </Drawer.Section>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <Drawer.Item
          icon={({color, size}) => (
            <Icon name="logout" color={color} size={size} />
          )}
          label="Log Out"
          onPress={() => {
            logout(navigation, access_token);
            navigation.closeDrawer();
          }}
        />
      </Drawer.Section>
    </View>
  );
};

export default DrawerComponent;
