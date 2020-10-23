import React, {Component} from 'react';
import {View, ScrollView, Text, TouchableWithoutFeedback, ToastAndroid, Image} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import qs from 'qs';

import InputText from '../../components/input-text/input-text.component';
import InputTextIcon from '../../components/input-text-icon/input-text-icon.component';
import Button from '../../components/button/button.component';
import TouchText from '../../components/touch-text/touch-text.component';
import Loader from '../../components/loader/loader.component'
import {login} from '../../configure/api/api.configure'

import styles from './login.style'

class Login extends Component {
    constructor(){
        super()
        this.state = {
            isShowPassword: true,
            emailid: '',
            password: '',
            isLoader: false,
            access_token: ''
        }
    }

submit  = () => {
    const {emailid, password, firstname} = this.state;
    if (this.validation()){
        this.setState({ isLoader: true })
            let data = qs.stringify({
                'grant_type': 'password',
                'username': emailid,
                'password': password,
                'ClientId': '1',
                'FirstName': '' 
            })
            login(data).then(res => {
                this.showMessage('Logged in successfull')
                this.navigate('Home')
                this.setState({ isLoader: false, access_token: res.access_token }, () => this.saveAccessToken())
            }).catch(error => {
                console.log("error", error.response.data)
                this.showMessage(error.response.data.error_description)
                this.setState({ isLoader: false })
            })
        }
}

saveAccessToken = async () => {
    const {access_token} = this.state;
    if (access_token !== null || access_token !== undefined || access_token !== ''){
        try {
            console.log("Store access: ", access_token)
            await AsyncStorage.setItem('access_token', JSON.stringify(access_token));
        } catch (error) {
            console.log("Async Access token error", access_token);
        }
    }
}

    validation = () => {
        const { emailid, password} = this.state;
        let cancel = false;
        if (emailid.length === 0) {
            cancel = true;
        } if (password.length === 0) {
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

navigate = (page) => {
    const {navigation} = this.props;
    navigation.navigate(page)
}

    render(){
        const {isShowPassword, emailid, password, isLoader} = this.state;
        return (
            <View style={styles.container}>
                <ScrollView keyboardShouldPersistTaps='handled'>
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={require('../../assets/png-images/medsie_logo.png')}/>
                    <Text style={styles.title}>Find stores, doctors and events right next to you</Text>
                    <Text style={styles.loginText}>LOGIN</Text>
                    <View style={styles.inputContainer}>
                        <InputText
                            placeHolder="Email ID"
                            value={emailid}
                            keyboardType="email-address"
                            onChangeText={(emailid) => this.setState({ emailid })}
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
                    <View style={styles.buttonContainer}>
                        <Button title="Login" onPress={() => this.submit()}/>
                    </View>
                    <View style={styles.forgotPassView}>
                        <TouchText title="Forgot Password?" txtstyle={styles.forgotPassword} />
                    </View>
                    <View style={styles.accountView}>
                        <Text style={styles.accountText}>
                            Don't have an account?
                        </Text>
                        <Text style={styles.accountText}>
                            <TouchableWithoutFeedback onPress={() => this.navigate('Registration')}><View style={styles.createAcTouch}><Text style={styles.createTxt}>Click here to </Text><Text style={styles.createTouchTxt}>create a new account</Text></View></TouchableWithoutFeedback>
                        </Text>
                    </View>
                    <Loader isLoader={isLoader}/>
                    </View>
                </View>
            </ScrollView>
            </View>
        )
    }
}

export default Login