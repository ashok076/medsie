import React, {Component} from 'react';
import {View, SafeAreaView, ScrollView, Text, TouchableOpacity, ToastAndroid} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/Feather';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from "date-fns";
import qs from 'qs';

import Header from '../../components/header/header.component';
import InputText from '../../components/input-text/input-text.component';
import MultilineInput from '../../components/multiline-input/multiline-input.component';
import Button from '../../components/button/button.component';
import NoBackgroundButton from '../../components/no-background-button/no-background-button.component';
import ModalPicker from '../../components/modal-picker/modal-picker.component'
import ModalList from '../../components/modal-list/modal-list.component';
import Loader from '../../components/loader/loader.component';
import {registerStore, categoryStore} from '../../configure/api/api.configure';
import {selling_type, week_days, week_ends} from './register-store.list';

import styles from './register-store.style';

class RegisterStore extends Component {
    initialState = {
            storeName: '',
            storeNumber: '',
            storeAddress: '',
            addIntroduction: '',
            businessCategory: '',
            sellingType: '',
            isPickerVisible: false,
            mode: '',
            fromWeekD: '10:00 AM',
            toWeekD: '10:00 PM',
            fromWeekE: '10:00 AM',
            toWeekE: '10:00 PM',
            key: '',
            modal: '',
            array: [],
            catArray: [],
            access_token: '',
            isLoader: false
    }
    constructor(){
        super()
        this.state = {
            ...this.initialState
        }
    }

  componentDidMount() {
    const {navigation, route} = this.props;
    navigation.addListener('focus', () => {
      this.getAccessToken();
      this.setState(this.initialState)
    });
  }

  getAccessToken = async () => {
      let access_token = ''
      try {
        access_token = await AsyncStorage.getItem('access_token')
        this.setState({ access_token }, () => this.getCategory())
    } catch (error) {
        console.log(error)
    }
  }

  getCategory = async () => {
      const {access_token} = this.state
      await categoryStore(JSON.parse(access_token))
        .then(response => {
            console.log("Cat Res: ", response)
            let arr = [];
            response[0].map(val => 
                arr.push({
                    id: val.Cat_PkId,
                    type: val.Cat_Name
                })
            )
            this.setState({ catArray: arr })
            })
        .catch(error => console.log("Error: ", error))
  }

submit = async () => {
    const {storeName, storeNumber, storeAddress, addIntroduction, fromWeekD, toWeekD, access_token} = this.state;
    this.setState({ isLoader: true, isPickerVisible: false })
    let arr = [];
    week_days.map(day => {
        arr.push({
        BHT_Weekdays: day,
        BHT_FromTime: fromWeekD,
        BHT_ToTime: toWeekD,
        BHT_CustomDate: ''
        })
    })
    let data = JSON.stringify({
        Type: 1,
        Buss_Name: storeName,
        Buss_Number: storeNumber,
        Buss_Address: storeAddress,
        Buss_Description: addIntroduction,
        BusinessHoursTransMaster_DTO: JSON.stringify(arr),
        Buss_City: '',
        Buss_Country: '',
        Buss_Zip: '',
        Buss_Description: '',
        Buss_UserId: '',
        Buss_Image_Path: '',
        Buss_CatId: '',
        Buss_TypeOfBuss: '',
        Buss_SellType: '',
        Buss_Lat: '',
        Buss_Long: '',
        UserID: ''
    })
    console.log("Data: ", data);
    await registerStore(data, JSON.parse(access_token))
        .then(response => {
            console.log("Res: ", response)
            this.setState({ isLoader: false })
            this.showMessage("Your store is successfully registered")
            })
        .catch(error => console.log("Error: ", error))
}

showMessage = (message) => {
    ToastAndroid.showWithGravity(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM
    );
}

onDateTimeChange = (event, selectedDate) => {
    console.log("Event: ", event, selectedDate)
    let dateTime = format(selectedDate, "hh:mm a");
    const {key} = this.state;
    this.setState({ [key]: dateTime })
}

  changeModalVisibility = (bool) => {
    this.setState({modal: bool});
  };

  changeState = (key, value) => {
    this.setState({[key]: value});
  };

storeHours = () => (
    <View>
        <View style={styles.row}>
            <Text style={styles.text}> Store Hours </Text>
            <Text style={styles.underline}> Add custom dates </Text>
        </View>
    </View>
)

weekdays = () => (
    <View>
        <View style={styles.row}>
            <Text style={styles.text}> Weekdays </Text>
            <View style={styles.rowD}>
                <NoBackgroundButton title={this.state.fromWeekD} onPress={() => this.setState({ isPickerVisible: true, mode: 'time', key: 'fromWeekD' })}/>
                <Text> to </Text>
                <NoBackgroundButton title={this.state.toWeekD} onPress={() => this.setState({ isPickerVisible: true, mode: 'time', key: 'toWeekD' })}/>
            </View>
        </View>
    </View>
)

weekends = () => (
    <View>
        <View style={styles.row}>
            <Text style={styles.text}> Weekends </Text>
            <View style={styles.rowD}>
                <NoBackgroundButton title={this.state.fromWeekE} onPress={() => this.setState({ isPickerVisible: true, mode: 'time', key: 'fromWeekE' })}/>
                <Text> to </Text>
                <NoBackgroundButton title={this.state.toWeekE} onPress={() => this.setState({ isPickerVisible: true, mode: 'time', key: 'toWeekE' })}/>
            </View>
        </View>
    </View>
)

uploadImage = () => (
    <TouchableOpacity style={styles.uploadImageView}>
        <Icon name="upload" size={30}/>
        <Text style={styles.uploadImageTxt}> Upload an Image </Text>
    </TouchableOpacity>
)

dateTimePicker = () => (
    <View>
    {this.state.isPickerVisible && (
        <DateTimePicker
            mode={this.state.mode}
            value={new Date()}
            style={{width: 300, opacity: 1, height: 30, marginTop: 50}}
            onChange={this.onDateTimeChange}
            minuteInterval={1}
            />
        )}
    </View>
)

    render(){
        const {navigation, route} = this.props;
        const {showDrawer} = route.params;
        const {storeName, storeNumber, storeAddress, addIntroduction, modal, array, businessCategory, sellingType, key, catArray, isLoader} = this.state;
        console.log("Sell: ", catArray)
        return (
            <SafeAreaView style={styles.contain}>
                <ScrollView>
                    <View style={styles.container}>
                    {showDrawer ? <Header navigation={navigation}/> : <View/>}
                    <View style={styles.bodycontainer}>
                    <Text style={styles.title}> Register your store </Text>
                        {this.uploadImage()}
                        <View style={styles.inputContainer}>
                        <InputText
                            placeHolder="Enter store name"
                            value={storeName}
                            keyboardType="default"
                            onChangeText={(storeName) => this.setState({ storeName })}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <InputText
                            placeHolder="Enter store number"
                            keyboardType="number-pad"
                            value={storeNumber}
                            onChangeText={(storeNumber) => this.setState({ storeNumber })}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <ModalPicker
                            placeHolder="Enter business category"
                            onPress={() => this.setState({ modal: true, array: catArray, key: 'businessCategory' })}
                            value={businessCategory}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <ModalPicker
                            placeHolder="Enter selling type"
                            onPress={() => this.setState({ modal: true, array: selling_type, key: 'sellingType' })}
                            value={sellingType}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <InputText
                            placeHolder="Enter store address"
                            keyboardType="default"
                            value={storeAddress}
                            onChangeText={(storeAddress) => this.setState({ storeAddress })}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <MultilineInput
                            placeHolder="Add Introduction"
                            message="Not more than 500 words"
                            value={addIntroduction}
                            keyboardType="default"
                            onChangeText={(addIntroduction) => this.setState({ addIntroduction })}
                        />
                    </View>
                    {this.storeHours()}
                    {this.weekdays()}
                    {this.weekends()}
                    {this.dateTimePicker()}
                    <View style={styles.buttonContainer}>
                        <Button title="Submit" onPress={() => this.submit()}/>
                    </View>
                    </View>
                    <ModalList
                        isModalVisible={modal}
                        list={array}
                        changeModalVisibility={this.changeModalVisibility}
                        changeState={this.changeState}
                        id={key}
                    />
                    <Loader isLoader={isLoader}/>
                </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default RegisterStore