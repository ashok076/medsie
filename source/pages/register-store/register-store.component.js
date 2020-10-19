import React, {Component} from 'react';
import {View, SafeAreaView, ScrollView, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import Header from '../../components/header/header.component';
import InputText from '../../components/input-text/input-text.component';
import MultilineInput from '../../components/multiline-input/multiline-input.component'
import Button from '../../components/button/button.component';
import NoBackgroundButton from '../../components/no-background-button/no-background-button.component'

import styles from './register-store.style';

class RegisterStore extends Component {
    constructor(){
        super()
        this.state = {
            hide: 1
        }
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
                <NoBackgroundButton title="10:00 AM"/>
                <Text> to </Text>
                <NoBackgroundButton title="10:00 PM"/>
            </View>
        </View>
    </View>
)

weekends = () => (
    <View>
        <View style={styles.row}>
            <Text style={styles.text}> Weekends </Text>
            <View style={styles.rowD}>
                <NoBackgroundButton title="10:00 AM"/>
                <Text> to </Text>
                <NoBackgroundButton title="10:00 PM"/>
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

    render(){
        const {navigation} = this.props;
        return (
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.container}>
                    <Header navigation={navigation}/>
                    <View style={styles.bodycontainer}>
                    <Text style={styles.title}> Register your store </Text>
                        {this.uploadImage()}
                        <View style={styles.inputContainer}>
                        <InputText
                            placeHolder="Enter store name"
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <InputText
                            placeHolder="Enter store number"
                            keyboardType="number-pad"
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <InputText
                            placeHolder="Enter store address"
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <MultilineInput
                            placeHolder="Enter store address"
                            message="Not more than 500 words"
                        />
                    </View>
                    {this.storeHours()}
                    {this.weekdays()}
                    {this.weekends()}
                    <View style={styles.buttonContainer}>
                        <Button title="Submit" />
                    </View>
                    </View>
                </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default RegisterStore