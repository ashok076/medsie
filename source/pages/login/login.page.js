import React, {Component} from 'react';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';

import InputText from '../../components/input-text/input-text.component';
import InputTextIcon from '../../components/input-text-icon/input-text-icon.component.js'
import Button from '../../components/button/button.component';
import TouchText from '../../components/touch-text/touch-text.component'

import styles from './login.style'

class Login extends Component {
    constructor(){
        super()
        this.state = {
            isShowPassword: true
        }
    }

    render(){
        const {isShowPassword} = this.state
        return (
            <ScrollView style={styles.container}>
                <View>
                    <Text style={styles.title}>Find stores, doctors and events right next to you</Text>
                    <Text style={styles.loginText}>LOGIN</Text>
                    <View style={styles.inputContainer}>
                        <InputText
                            placeHolder="Email ID"
                            value="a@gmail.com"
                            keyboardType="email-address"
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <InputTextIcon
                            placeholder="Password"
                            icon={isShowPassword ? 'eye' : 'eye-slash'}
                            value={"password"}
                            show={isShowPassword}
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button title="Login" />
                    </View>
                    <View style={styles.forgotPassView}>
                        <TouchText title="Forgot Password?" txtstyle={styles.forgotPassword} />
                    </View>
                    <View style={styles.accountView}>
                        <Text style={styles.accountText}>
                            Don't have an account?
                        </Text>
                        <Text style={styles.accountText}>
                            <TouchableOpacity style={styles.createAcTouch}><Text style={styles.createTxt}>Click here to </Text><Text style={styles.createTouchTxt}>create a new account</Text></TouchableOpacity>
                        </Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

export default Login