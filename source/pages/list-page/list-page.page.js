import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';

import ListPageComponent from '../../components/list-page-component/list-page-component.component'

import styles from './list-page.style'

class ListPage extends Component {
    constructor(){
        super()
    }

    render(){
        const {navigation} = this.props
        return(
            <SafeAreaView style={styles.container}>
                <ListPageComponent list={[1,2,3,4,5,6]} navigation={navigation}/>
            </SafeAreaView>
        )
    }
}

export default ListPage;