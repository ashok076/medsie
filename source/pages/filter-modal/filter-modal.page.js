import React, {Component} from 'react';
import {SafeAreaView, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Text, List, Paragraph, Checkbox, Card} from 'react-native-paper';

import BackHeader from '../../components/back-header/back-header.component';
import Button from '../../components/button/button.component';
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
      ratOne: false,
      ratTwo: false,
      ratThree: false,
      ratFour: false,
      ratFive: false,
    };
  }

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
      <Paragraph>{txt}</Paragraph>
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

  button = (onPress) => (
    <Card style={styles.cardView}>
      <View style={styles.horizontalView}>
        <TouchableOpacity style={styles.filterButton}>
          <View style={[styles.horizontalView, styles.button]}>
            <Text style={styles.title}> Cancel </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <View style={[styles.horizontalView, styles.button]}>
            <Text style={styles.title}> Apply </Text>
          </View>
        </TouchableOpacity>
      </View>
    </Card>
  );

  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.innerContainer}>
          {this.category()}
          {this.sellingType()}
          {this.rating()}
        </View>
        {this.button()}
      </SafeAreaView>
    );
  }
}

export default FilterModal;
