import React from "react";
import {TouchableOpacity} from 'react-native';

import styles from './store-element.style';

const StoreElement = ({item, navigation}) => (
    <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('ListPage', { type: item.item.name })}>
        {item.item.icon}
    </TouchableOpacity>
)

export default StoreElement;