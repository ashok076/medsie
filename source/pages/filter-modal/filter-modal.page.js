import React, {Component} from 'react';
import {SafeAreaView, View, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  Text,
  List,
  Paragraph,
  Checkbox,
  Card,
  Switch,
} from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';

import BackHeader from '../../components/back-header/back-header.component';
import Button from '../../components/button/button.component';
import {filterData} from '../../configure/api/api.configure';
import {createOffset} from '../../configure/miscellaneous/miscellaneous.configure';
import {Color} from '../../assets/color/color.assets';

import styles from './filter-modal.style';

class FilterModal extends Component {
  constructor() {
    super();
    this.state = {
      catRec: false,
      catMed: false,
      catDel: false,
      catDoc: false,
      catEvent: false,
      sellRec: false,
      sellMed: false,
      sellBoth: false,
      ratOne: false,
      ratTwo: false,
      ratThree: false,
      ratFour: false,
      ratFive: false,
      isShopOpen: false,
      currentLatitude: 0,
      currentLongitude: 0,
      orderBy: false,
    };
  }

  componentDidMount() {
    const {navigation} = this.props;
    navigation.addListener('focus', () => {
      this.setState(this.initialState);
      this.setState({isLoader: true}, () => this.getLatLong());
    });
  }

  getLatLong = async () => {
    const value = await AsyncStorage.multiGet(['latitude', 'longitude']);
    const currentLatitude = JSON.parse(value[0][1]);
    const currentLongitude = JSON.parse(value[1][1]);
    this.setState({
      currentLatitude: currentLatitude,
      currentLongitude: currentLongitude,
    });
  };

  filterResults = async () => {
    let catArr = [];
    let sellArr = [];
    let ratArr = [];
    const {
      catRec,
      catMed,
      catDel,
      catDoc,
      catEvent,
      sellRec,
      sellMed,
      sellBoth,
      currentLatitude,
      currentLongitude,
      isShopOpen,
      orderBy,
      ratOne,
      ratTwo,
      ratThree,
      ratFour,
      ratFive,
    } = this.state;
    const {navigation} = this.props;
    if (catRec) catArr.push({Cat_PkId: 1});
    if (catMed) catArr.push({Cat_PkId: 2});
    if (catDel) catArr.push({Cat_PkId: 3});
    if (catDoc) catArr.push({Cat_PkId: 4});
    if (catEvent) catArr.push({Cat_PkId: 5});
    if (sellRec) sellArr.push({Buss_SellType: 1});
    if (sellMed) sellArr.push({Buss_SellType: 2});
    if (sellBoth) sellArr.push({Buss_SellType: 3});
    if (ratOne) ratArr.push({Buss_Rat_Rating: 1});
    if (ratTwo) ratArr.push({Buss_Rat_Rating: 2});
    if (ratThree) ratArr.push({Buss_Rat_Rating: 3});
    if (ratFour) ratArr.push({Buss_Rat_Rating: 4});
    if (ratFive) ratArr.push({Buss_Rat_Rating: 5});
    let data = JSON.stringify({
      Buss_User_TimeZone: createOffset(new Date()),
      Buss_Lat: currentLatitude,
      Buss_Long: currentLongitude,
      Buss_SellType: JSON.stringify(sellArr),
      Buss_CatId: JSON.stringify(catArr),
      Buss_Rat_Rating: JSON.stringify(ratArr),
      OrderbyVal: 'Rat_Rating',
      Orderby: orderBy ? 'Asc' : 'Desc',
      Type: 4,
      Buss_Open_Close: isShopOpen,
    });
    console.log('Filter Data: ', data);
    await filterData(data)
      .then((response) => {
        console.log('Filter Res: ', response);
        navigation.navigate('SearchAndFilter', {
          isFocus: false,
          data: response,
        });
      })
      .catch((error) => console.log('Filter Error: ', error));
  };

  closeIcon = (closeModal) => (
    <TouchableOpacity onPress={closeModal}>
      <Icon name="close" size={24} />
    </TouchableOpacity>
  );

  theme = {
    colors: {
      primary: Color.primaryColor,
    },
  };

  checkBox = (txt, status, key) => (
    <TouchableOpacity
      style={styles.row}
      onPress={() => this.setState({[key]: !status})}>
      <Paragraph style={styles.paragraph}>{txt}</Paragraph>
      <View pointerEvents="none">
        <Checkbox
          status={status ? 'checked' : 'unchecked'}
          color={Color.primaryColor}
        />
      </View>
    </TouchableOpacity>
  );

  category = () => (
    <List.Section>
      <List.Accordion title="Category" theme={this.theme}>
        {this.checkBox('Recreational Shops', this.state.catRec, 'catRec')}
        {this.checkBox('Medicinal Shops', this.state.catMed, 'catMed')}
        {this.checkBox('Deliveries', this.state.catDel, 'catDel')}
        {this.checkBox('Doctors', this.state.catDoc, 'catDoc')}
        {this.checkBox('Events', this.state.catEvent, 'catEvent')}
      </List.Accordion>
    </List.Section>
  );

  sellingType = () => (
    <List.Section>
      <List.Accordion title="Selling Type" theme={this.theme}>
        {this.checkBox('Recreational', this.state.sellRec, 'sellRec')}
        {this.checkBox('Medicinal ', this.state.sellMed, 'sellMed')}
        {this.checkBox('Both ', this.state.sellBoth, 'sellBoth')}
      </List.Accordion>
    </List.Section>
  );

  rating = () => (
    <List.Section>
      <List.Accordion title="Rating" theme={this.theme}>
        {this.checkBox('1 star', this.state.ratOne, 'ratOne')}
        {this.checkBox('2 star ', this.state.ratTwo, 'ratTwo')}
        {this.checkBox('3 star ', this.state.ratThree, 'ratThree')}
        {this.checkBox('4 star ', this.state.ratFour, 'ratFour')}
        {this.checkBox('5 star ', this.state.ratFive, 'ratFive')}
      </List.Accordion>
    </List.Section>
  );

  button = (navigation) => (
    <Card style={styles.cardView}>
      <View style={styles.horizontalView}>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => navigation.goBack()}>
          <View style={[styles.horizontalView, styles.button]}>
            <Text style={styles.title}> Cancel </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => this.filterResults()}>
          <View style={[styles.horizontalView, styles.button]}>
            <Text style={styles.title}> Apply </Text>
          </View>
        </TouchableOpacity>
      </View>
    </Card>
  );

  openClose = (status) => (
    <View style={styles.row}>
      <Paragraph style={styles.paragraph}>Open now</Paragraph>
      <Switch
        value={status}
        color={Color.primaryColor}
        onValueChange={() => this.setState({isShopOpen: !status})}
      />
    </View>
  );

  orderBy = (status) => (
    <View style={styles.row}>
      <Paragraph style={styles.paragraph}>Order ascending</Paragraph>
      <Switch
        value={status}
        color={Color.primaryColor}
        onValueChange={() => this.setState({orderBy: !status})}
      />
    </View>
  );

  render() {
    const {navigation} = this.props;
    const {isShopOpen, orderBy} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.innerContainer}>
            {this.category()}
            {this.sellingType()}
            {this.rating()}
            {this.openClose(isShopOpen)}
            {this.orderBy(orderBy)}
          </View>
        </ScrollView>
        {this.button(navigation)}
      </SafeAreaView>
    );
  }
}

export default FilterModal;
