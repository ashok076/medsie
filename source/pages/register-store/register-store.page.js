import React, {Component} from 'react';
import {View, SafeAreaView, ScrollView, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/Feather';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from "date-fns";
import qs from 'qs';

import Header from '../../components/header/header.component';
import InputText from '../../components/input-text/input-text.component';
import MultilineInput from '../../components/multiline-input/multiline-input.component'
import Button from '../../components/button/button.component';
import NoBackgroundButton from '../../components/no-background-button/no-background-button.component'
import {registerStore} from '../../configure/api/api.configure'

import styles from './register-store.style';

class RegisterStore extends Component {
    constructor(){
        super()
        this.state = {
            storeName: '',
            storeNumber: '',
            storeAddress: '',
            addIntroduction: '',
            isPickerVisible: false,
            mode: '',
            fromWeekD: '10:00 AM',
            toWeekD: '10:00 PM',
            fromWeekE: '10:00 AM',
            toWeekE: '10:00 PM',
            key: ''
        }
    }

submit = async () => {
    const {storeName, storeNumber, storeAddress, addIntroduction, fromWeekD, toWeekD} = this.state;
    let access_token = ''
    try {
        access_token = await AsyncStorage.getItem('access_token')
    } catch (error) {
        console.log(error)
    }
    let arr = []
    let bussHours = {
        BHT_Weekdays: 'Monday',
        BHT_FromTime: fromWeekD,
        BHT_ToTime: toWeekD,
        BHT_CustomDate: ''
    }
    arr.push(bussHours)
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
        .then(response => console.log("Res: ", response))
        .catch(error => console.log("Error: ", error))
}

onDateTimeChange = (event, selectedDate) => {
    console.log("Event: ", event, selectedDate)
    let dateTime = format(selectedDate, "hh:mm a");
    const {key} = this.state;
    this.setState({ [key]: dateTime })
}

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
        const {storeName, storeNumber, storeAddress, addIntroduction} = this.state;
        return (
            <SafeAreaView>
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
                </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default RegisterStore