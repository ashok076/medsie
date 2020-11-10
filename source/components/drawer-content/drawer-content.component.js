import React, {Component} from 'react';
import {View, Alert} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {
  Title,
  Drawer,
  Text,
  TouchableRipple,
  Avatar,
  Caption
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import AsyncStorage from '@react-native-community/async-storage';

import Shops from '../../assets/svg-files/shops.svg';
import MedicalShops from '../../assets/svg-files/medical-shops.svg';
import Deliveries from '../../assets/svg-files/deliveries.svg';
import Doctors from '../../assets/svg-files/docto.svg';
import Events from '../../assets/svg-files/event.svg';


import styles from './drawer-content.style';

class DrawerComponent extends Component {
  constructor(){
    super()
    this.state = {
      show: false
    }
  }

    componentDidMount() {
    const {navigation, route} = this.props;
    navigation.addListener('focus', () => {
      this.getAccessToken()
    });
  }

    getAccessToken = async () => {
      const access_token = await AsyncStorage.getItem('access_token');
      if (access_token.length !== 0){
        this.setState({ show: true }, () => console.log("Show: ", this.state.show))
      }
  }

logout = (navigation) =>
  Alert.alert(
    'Logout',
    'Are you sure you want to logout?',
    [
      {text: 'LOGOUT', onPress: () => this.signout(navigation)},
      {text: 'CANCEL'},
    ],
    {cancelable: false},
  );

signout = async (navigation) => {
  try {
    await AsyncStorage.clear()
  } catch(e) {
    // clear error
  }
  navigation.reset({
    index: 0,
    routes: [{name: 'Login'}],
  })
}; 

  render(){
    const {navigation} = this.props;
    const {show} = this.state;
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
            labelStyle={styles.labelStyle}
          />
          <DrawerItem
            icon={({color, size}) => (
              <MedicalShops width={size} height={size} />
            )}
            label="Medical Shops"
            onPress={() => navigation.navigate('Home')}
            labelStyle={styles.labelStyle}
          />
          <DrawerItem
            icon={({color, size}) => (
              <Deliveries width={size} height={size} />
            )}
            label="Deliveries"
            onPress={() => navigation.navigate('Home')}
            labelStyle={styles.labelStyle}
          />
          <DrawerItem
            icon={({color, size}) => (
              <Doctors width={size} height={size} />
            )}
            label="Doctors"
            onPress={() => navigation.navigate('Home')}
            labelStyle={styles.labelStyle}
          />
          <DrawerItem
            icon={({color, size}) => (
              <Events width={size} height={size} />
            )}
            label="Events"
            onPress={() => navigation.navigate('Home')}
            labelStyle={styles.labelStyle}
          />
        </Drawer.Section>
        <Drawer.Section style={styles.drawerSection}>
          {!show && (
            <DrawerItem
              label="Login"
              onPress={() => navigation.navigate('Login')}
              labelStyle={styles.labelStyle}
            />
          )}
          {!show && (
            <DrawerItem
              label="Register"
              onPress={() => navigation.navigate('Registration')}
              labelStyle={styles.labelStyle}
            />
          )}
          <DrawerItem
            label="List a store"
            onPress={() => navigation.navigate('RegisterStore', {
            showDrawer: true
        })}
            labelStyle={styles.labelStyle}
          />
          <DrawerItem
            label="Settings"
            onPress={() => navigation.navigate('AccountSettings')}
            labelStyle={styles.labelStyle}
          />
          <DrawerItem
            label="Privacy Policy"
            onPress={() => navigation.navigate('Home')}
            labelStyle={styles.labelStyle}
          />
          <DrawerItem
            label="About Medsie"
            labelStyle={styles.labelStyle}
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
            labelStyle={styles.labelStyle}
            onPress={() => this.logout(navigation)}
        />
      </Drawer.Section>
    </View>
  );
  }
};

export default DrawerComponent;
