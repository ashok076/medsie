import React from 'react';
import {View, Text, TouchableOpacity, Platform, Linking} from 'react-native';

import Call from '../../assets/svg-files/call.svg';
import Car from '../../assets/svg-files/car.svg';
import Location from '../../assets/svg-files/location.svg';

import styles from './action-button.style';

const ActionButtons = ({item, navigation, access_token, show}) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.icon} onPress={() => call(item)}>
      <Call height={45} width={45} />
      <Text style={styles.label}>Call</Text>
    </TouchableOpacity>
    {show && (
      <TouchableOpacity
        style={styles.icon}
        onPress={() => navigate(item, navigation, access_token)}>
        <Car height={45} width={45} />
        <Text style={styles.label}>Review</Text>
      </TouchableOpacity>
    )}
    <TouchableOpacity style={styles.icon} onPress={() => map(item)}>
      <Location height={45} width={45} />
      <Text style={styles.label}>Direction</Text>
    </TouchableOpacity>
  </View>
);

const call = (data) => {
  let phoneNumber = '';
  if (Platform.OS === 'android') {
    phoneNumber = `tel:${data.Buss_Number}`;
  } else {
    phoneNumber = `tel://${data.Buss_Number}`;
  }
  Linking.openURL(phoneNumber);
};

const navigate = (data, navigation, access_token) => {
  if (access_token !== null)
    navigation.navigate('WriteReviews', {
      data: data,
      access_token: access_token,
    });
  else {
    navigation.reset({index: 0, routes: [{name: 'Login'}]});
  }
};

const map = (data) => {
  const scheme = Platform.select({ios: 'maps:0,0?q=', android: 'geo:0,0?q='});
  const latLng = `${data.Buss_Lat},${data.Buss_Long}`;
  const label = data.Buss_Name;
  const url = Platform.select({
    ios: `${scheme}${label}@${latLng}`,
    android: `${scheme}${latLng}(${label})`,
  });
  Linking.openURL(url);
};

export default ActionButtons;