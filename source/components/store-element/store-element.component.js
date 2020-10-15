import React from "react";
import {View} from 'react-native';

import styles from './store-element.style';

const StoreElement = ({item}) => (
    <View style={[styles.icon, {backgroundColor: item.item.color}]}/>
)

export default StoreElement;