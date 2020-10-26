import React, {Component} from 'react';
import {View, TouchableOpacity, ScrollView} from 'react-native';
import {Text} from 'react-native-paper'

import Header from '../../components/header/header.component'
import InputText from '../../components/input-text/input-text.component'
import InputTextIcon from '../../components/input-text-icon/input-text-icon.component';
import Button from '../../components/button/button.component';

import styles from './account-settings.style';

class AccountSettings extends Component{
    constructor(){
        super();
        this.state = {
            emailid: '',
            isShowPassword: true,
            password: '',
            isLoader: true,
            phone: '',
            dob: ''
        }
    }

    render(){
        const {navigation} = this.props;
        const {isShowPassword, emailid, password, isLoader, phone, dob} = this.state;
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