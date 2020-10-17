import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {Title} from 'react-native-paper';
import Icons from 'react-native-vector-icons/AntDesign';

import styles from './back-header.style';

const BackHeader = ({navigation, title}) =>  (
  <View style={styles.titleView}>
    <View style={styles.rowObject}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icons
        name="arrowleft"
        color={'rgb(33, 47, 60)'}
        size={24}
      />
    </TouchableOpacity>
    <Title
      style={[
        styles.title,
        {
          color:'rgb(33, 47, 60)',
        },
      ]}>
      {title}
    </Title>
  </View>
  </View>
    )
export default BackHeader;