import React, {Component} from 'react';
import {View, TouchableOpacity, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {Text} from 'react-native-paper'

import Header from '../../components/header/header.component'
import InputText from '../../components/input-text/input-text.component'
import InputTextIcon from '../../components/input-text-icon/input-text-icon.component';
import Button from '../../components/button/button.component';
import {accountSettings} from '../../configure/api/api.configure'

import styles from './account-settings.style';

class AccountSettings extends Component{
    initialState = {
            emailid: '',
            isShowPassword: true,
            password: '',
            isLoader: true,
            name: '',
            phone: '',
            dob: '',
            access_token: ''
    }
    constructor(){
        super();
        this.state = {
            ...this.initialState
        }
    }

  componentDidMount() {
    const {navigation, route} = this.props;
    navigation.addListener('focus', () => {
      this.getAccessToken();
      this.setState(this.initialState)
      this.setState({ isLoader: true })
    });
  }

    getAccessToken = async () => {
      let access_token = ''
      try {
        access_token = await AsyncStorage.getItem('access_token')
        this.setState({ access_token }, () => this.getAccountSettings())
    } catch (error) {
        console.log(error)
    }
  }

  getAccountSettings = async () => {
      const {access_token} = this.state;
      await accountSettings(JSON.parse(access_token))
        .then(response => {
            console.log("Res: ", response[0][0])
            this.addViewData(response[0][0])
            })
        .catch(error => console.log("Error: ", error))
  }

    addViewData = (response) => {
        this.setState({
            name: response.User_Name,
            emailid: response.User_Email,
            password: response.User_Password,
            phone: response.User_Phone,
            isLoader: false
        })
}

    render(){
        const {navigation} = this.props;
        const {isShowPassword, emailid, password, isLoader, phone, dob, name} = this.state;
        return(
            <View style={styles.container}>
                <Header navigation={navigation}/>
                <ScrollView keyboardShouldPersistTaps='handled'>
                    <View style={styles.innerContainer}>
                        <View style={[styles.row, styles.titleContainer]}>
                            <Text style={styles.titeText}>Account Settings</Text>
                            <TouchableOpacity><Text style={styles.editText}>Edit Settings</Text></TouchableOpacity>
                        </View>
                        <View style={styles.inputContainer}>
                        <InputText
                            placeHolder="Name"
                            value={name}
                            keyboardType="default"
                            onChangeText={(name) => this.setState({ name })}
                        />
                        </View>
                        <View style={styles.inputContainer}>
                        <InputText
                            placeHolder="Email ID"
                            value={emailid}
                            keyboardType="email-address"
                            onChangeText={(emailid) => this.setState({ emailid })}
                        />
                        </View>
                    <View style={styles.inputContainer}>
                        <InputText
                            placeHolder="Password"
                            value={password}
                            keyboardType="default"
                            onChangeText={(password) => this.setState({ password })}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <InputText
                            placeHolder="Phone"
                            value={phone}
                            keyboardType="number-pad"
                            onChangeText={(phone) => this.setState({ phone })}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <InputText
                            placeHolder="Date of birth"
                            value={dob}
                            keyboardType="default"
                            onChangeText={(dob) => this.setState({ dob })}
                        />
                        </View>
                    <View style={styles.buttonContainer}>
                        <Button title="Edit Settings" onPress={() => this.submit()}/>
                    </View>
                </View>
                </ScrollView>
            </View>
        )
    }
}

export default AccountSettings;