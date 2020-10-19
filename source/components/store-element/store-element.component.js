import React from "react";
import {View} from 'react-native';

import styles from './store-element.style';

const StoreElement = ({item}) => (
    <View style={styles.icon}>{item.item.icon}</View>
)

export default StoreElement;