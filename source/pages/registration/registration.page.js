import React, {Component} from 'react';
import {View, ScrollView, Text, TouchableWithoutFeedback, ToastAndroid} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import qs from 'qs'

import InputText from '../../components/input-text/input-text.component';
import InputTextIcon from '../../components/input-text-icon/input-text-icon.component'
import Button from '../../components/button/button.component';
import TouchText from '../../components/touch-text/touch-text.component';
import BackHeader from '../../components/back-header/back-header.component';
import Loader from '../../components/loader/loader.component'
import {register} from '../../configure/api/api.configure'

import styles from './registration.style'

class Registration extends Component {
    constructor(){
        super()
        this.state = {
            isShowPassword: true,
            isShowConfirmPassword: true,
            firstname: '',
            emailid: '',
            mobile:'',
            password: '',
            confirmpassword: '',
            isLoader: false,
            access_token: ''
        }
    }

submit  = () => {
    const {emailid, confirmpassword, firstname} = this.state;
    const { navigation } = this.props
    if (this.validation()){
        if (this.passwordCheck()){
        this.setState({ isLoader: true })
            let data = qs.stringify({
                'grant_type': 'password',
                'username': emailid,
                'password': confirmpassword,
                'ClientId': '2',
                'FirstName': firstname 
            })
            register(data).then(res => {
                this.showMessage('Account created successfully')
                this.setState({ isLoader: false, access_token: res.access_token },() => this.saveAccessToken())
            }).catch(error => {
                this.showMessage(error.response.data.error_description)
                this.setState({ isLoader: false })
                console.log("error: ", error)
            })
        }
    }
}

saveAccessToken = async () => {
    const {access_token} = this.state;
    if (access_token !== null || access_token !== undefined || access_token !== ''){
        try {
            await AsyncStorage.setItem('access_token', JSON.stringify(access_token));
        } catch (error) {
            console.log("Async Access token error", access_token);
        }
    }
}

    passwordCheck = () => {
        const {password, confirmpassword} = this.state;
        if (password !== confirmpassword) {
            this.showMessage('Password does not match');
            return false
        }else {
            return true
        }
    }

    validation = () => {
        const {firstname, emailid, mobile, password, confirmpassword} = this.state;
        let cancel = false;
        if (firstname.length === 0) {
            cancel = true;
        } if (emailid.length === 0) {
            cancel = true;
        } if (mobile.length === 0) {
            cancel = true;
        } if (password.length === 0) {
            cancel = true;
        } if (confirmpassword.length === 0) {
            cancel = true;
        }
        if (cancel){
            this.showMessage('Fields can not be empty')
            return false;
        }else {
            return true;
        }
    }

showMessage = (message) => {
    ToastAndroid.showWithGravity(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM
    );
}

navigate = () => {
    const {navigation} = this.props;
    const access_token = this.getSaveAccessToken();
    if (access_token !== ''){
        navigation.navigate('RegisterStore', {
            showDrawer: false
        });
    }else {
        this.showMessage('Please first register to list your store')
    }
    
}

getSaveAccessToken = async () => {
    try {
    const value = await AsyncStorage.getItem('access_token')
    if(value !== null) {
      return JSON.parse(value)
    }
  } catch(e) {
    return '';
  }
}

    render(){
        const {isShowPassword, isShowConfirmPassword, firstname, emailid, mobile, password, confirmpassword, isLoader} = this.state;
        const {navigation} = this.props
        return (
            <View style={styles.container}>
                <ScrollView keyboardShouldPersistTaps='handled'>
                <View style={styles.innerContainer}>
                    <BackHeader title="Back to login" navigation={navigation}/>
                    <Text style={styles.loginText}>CREATE AN ACCOUNT</Text>
                    <View style={styles.inputContainer}>
                        <InputText
                            placeHolder="First Name"
                            value={firstname}
                            keyboardType="default"
                            onChangeText={(firstname) => this.setState({ firstname })}
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
                            placeHolder="Mobile Number"
                            value={mobile}
                            keyboardType="number-pad"
                            onChangeText={(mobile) => this.setState({ mobile })}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <InputTextIcon
                            placeholder="Password"
                            icon={isShowPassword ? 'eye' : 'eye-off'}
                            value={password}
                            show={isShowPassword}
                            onChangeText={(password) => this.setState({ password })}
                            onPress={() => this.setState({ isShowPassword: !this.state.isShowPassword })}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <InputTextIcon
                            placeholder="Confirm Password"
                            icon={isShowConfirmPassword ? 'eye' : 'eye-off'}
                            value={confirmpassword}
                            show={isShowConfirmPassword}
                            onChangeText={(confirmpassword) => this.setState({ confirmpassword })}
                            onPress={() => this.setState({ isShowConfirmPassword: !this.state.isShowConfirmPassword })}
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button title="Create an account" onPress={() => this.submit()}/>
                    </View>
                    <View style={styles.accountView}>
                        <Text style={styles.accountText}>
                            Do you want your store to get listed?
                        </Text>
                        <Text style={styles.accountText}>
                            <TouchableWithoutFeedback onPress={() => this.navigate()}><View style={styles.createAcTouch}><Text style={styles.createTxt}>Click here to </Text><Text style={styles.createTouchTxt}>list your store</Text></View></TouchableWithoutFeedback>
                        </Text>
                    </View>
                    <Loader isLoader={isLoader}/>
                </View>
            </ScrollView>
            </View>
        )
    }
}

export default Registration