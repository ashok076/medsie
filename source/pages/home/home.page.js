import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';

import Header from '../../components/header/header.component';
import HomeContent from '../../components/home-content/home-content.component'

import styles from './home.style';

class Home extends Component {
    constructor(){
        super()
        this.state = {
            state: 1
        }
    }

    render(){
        const {navigation} = this.props;
        return (
            <SafeAreaView style={styles.container}>
                <View>
                    <Header navigation={navigation}/>
                    <HomeContent navigation={navigation}/>
                </View>
            </SafeAreaView>
        )
    }
}

export default Home;