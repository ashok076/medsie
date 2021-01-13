import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import {Title, Caption, Paragraph, Card, Badge} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

import NoBackgroundButton from '../no-background-button/no-background-button.component.js';
import {Color} from '../../assets/color/color.assets';

import styles from './edit-store-settings.style';

const EditStoreSettings = ({data, navigation}) => (
  <View style={styles.align}>
    <FlatList
      data={data}
      renderItem={(item, index) => store(navigation, item, index)}
      keyExtractor={(item, index) => item.id}
    />
  </View>
);

const store = (navigation, item, index) => (
  <Card style={styles.container} key={index}>
    <View style={styles.row}>
      <Image style={styles.image} source={{uri: item.item.Buss_Image_Path}} />
      <View style={styles.textContainer}>
        <Badge size={24} style={styles.visit}>
          {item.item.Buss_Vist_Count}
        </Badge>
        <Title style={styles.title}>{item.item.Buss_Name}</Title>
        <Text style={styles.text}>{item.item.Buss_Number}</Text>
        <View style={[styles.buttonContainer, styles.horizontal]}>
          <NoBackgroundButton
            title="Edit Store Settings"
            onPress={() => navigate(navigation, item)}
          />
          <NoBackgroundButton
            title="Review"
            onPress={() =>
              navigation.navigate('ReplyReview', {BussId: item.item.Buss_PkId})
            }
          />
        </View>
      </View>
    </View>
  </Card>
);

const navigate = (navigation, item) => {
  navigation.navigate('EditStore', {data: item.item});
};

export default EditStoreSettings;
