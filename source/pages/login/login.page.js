import React, {Component} from 'react';
import {View, ScrollView, Text, TouchableWithoutFeedback, Image, SafeAreaView} from 'react-native';
import { Toast } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import qs from 'qs';

import InputText from '../../components/input-text/input-text.component';
import InputTextIcon from '../../components/input-text-icon/input-text-icon.component';
import Button from '../../components/button/button.component';
import TouchText from '../../components/touch-text/touch-text.component';
import Loader from '../../components/loader/loader.component'
import {login} from '../../configure/api/api.configure'
import MedsieLogo from "../../assets/svg-files/medsie_logo.svg";

import styles from './login.style'

class Login extends Component {
    constructor(){
        super()
        this.state = {
            isShowPassword: true,
            emailid: '',
            password: '',
            access_token: '' ,
            isLoader: false,
        }
    }

  componentDidMount() {
    const {navigation, route} = this.props;
    navigation.addListener('focus', () => {
      this.setState({ isLoader: true })
      this.getAccessToken();
    });
  }

    getAccessToken = async () => {
        const {navigation} = this.props;
      try {
        const value = await AsyncStorage.multiGet(['access_token', 'session']);
        const access_token = JSON.parse(value[0][1]);
        const session = JSON.parse(value[1][1]);
        if (access_token !== null && access_token !== undefined && access_token !== ''){
            console.log("Access Token: ", access_token)
            if (session){
                navigation.reset({
                    index: 0,
                    routes: [{name: 'Home'}],
                });
            }
        }
    } catch (error) {
        console.log(error)
        this.setState({ isLoader: false })
    }
    this.setState({ isLoader: false })
  }

submit  = async () => {
    const {emailid, password, firstname} = this.state;
    const {navigation} = this.props;
    this.setState({ isLoader: true })
    if (this.validation()){
        this.setState({ isLoader: true })
            let data = qs.stringify({
                'grant_type': 'password',
                'username': emailid,
                'password': password,
                'ClientId': '1',
                'FirstName': '' 
            })
            await login(data).then(res => {
                this.showMessage('Logged in successfull')
                this.home()
                this.setState({access_token: res.access_token, isLoader: false }, () => this.saveAccessToken())
            }).catch(error => {
                console.log("error", error.response.data.error_description)
                this.setState({ isLoader: false })
                this.showMessage(error.response.data.error_description)
            })
        }
}

home = async () => {
    const {navigation} = this.props;
    await AsyncStorage.setItem('session', JSON.stringify(true));
    navigation.reset({
        index: 0,
        routes: [{name: 'Home'}],
    });
}

saveAccessToken = async () => {
    const {access_token} = this.state;
    if (access_token !== null || access_token !== undefined || access_token !== ''){
        try {
            console.log("Store access: ", access_token)
            const token = ['access_token', JSON.stringify(access_token)];
            const session = ['session', JSON.stringify(true)]
            await AsyncStorage.multiSet([token, session]);
        } catch (error) {
            console.log("Async Access token error", access_token);
            alert(error)
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
    if (message !== '' && message !== null && message !== undefined){
        Toast.show({
        text: message,
        style: styles.toasttxt,
        duration: 5000
    })
  }
}

navigate = (page) => {
    const {navigation} = this.props;
    navigation.navigate(page)
}

    header = () => (
<View style={styles.headerView}>
    <MedsieLogo style={styles.logo} height={170} width={170}/>
  </View>
    )

    render(){
        const {isShowPassword, emailid, password, isLoader} = this.state;
        return (
            <SafeAreaView style={styles.container}>
                {this.header()}
                <ScrollView keyboardShouldPersistTaps='handled' style={{ flex: 1 }}>
                <View style={styles.innerContainer}>
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
                        <TouchableWithoutFeedback onPress={() => this.home()}>
                            <Text style={styles.skip}>
                                Skip for now >
                            </Text>
                        </TouchableWithoutFeedback>
                        
                    </View>
                    <Loader isLoader={isLoader}/>
                    </View>
            </ScrollView>
            </SafeAreaView>
        )
    }
}

export default Login