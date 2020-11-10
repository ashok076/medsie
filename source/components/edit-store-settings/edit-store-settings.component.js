import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import {Title, Caption, Paragraph, Card} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons';

import NoBackgroundButton from '../no-background-button/no-background-button.component.js'

import styles from './edit-store-settings.style';

const EditStoreSettings = ({ data, navigation }) => (
    <View style={styles.align}>
        <FlatList
            data={data}
            renderItem={(item, index) => store(navigation, item)}
            keyExtractor={(item, index) => item.id}
            />
    </View>
)

const store = (navigation, item) => (
    <Card style={ styles.container}>
        <View style={styles.row}>
            <Image style={styles.image} source={{uri: item.item.Buss_Image_Path}}/>
            <View style={styles.textContainer}>
                <Title style={styles.title}>{item.item.Buss_Name}</Title>
                <Text style={styles.text}>{item.item.Buss_Number}</Text>
            <View style={styles.buttonContainer}>
                <NoBackgroundButton title="Edit Store Settings" onPress={() => navigate(navigation, item)}/>
            </View>
            </View>
        </View>
    </Card>
)

const navigate = (navigation, item) => {
    navigation.navigate('EditStore', {data: item.item})
}

export default EditStoreSettings;