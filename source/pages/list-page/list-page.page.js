import React, {Component} from 'react';
import {SafeAreaView, Text, View, TouchableOpacity} from 'react-native';

import ListPageComponent from '../../components/list-page-component/list-page-component.component'
import BackHeader from '../../components/back-header/back-header.component'
import {getHomeData} from '../../configure/api/api.configure'

import styles from './list-page.style'

class ListPage extends Component {
    constructor(){
        super();
        this.state = {
            array: []
        }
    }

      componentDidMount() {
        const {navigation, route} = this.props;
            navigation.addListener('focus', () => {
                this.homeData();
            });
  }

    homeData = async () => {
        const { type } = this.props.route.params;
        const data = JSON.stringify({ Type: 1 })
        await getHomeData(data)
        .then(response => {
            response[1].map(val => {
                if (type === val.Cat_Name) {
                    this.setState({ array: val.BusinessMaster_Home }, () => console.log(JSON.stringify(this.state.array)))
                }
            })
        })
        .catch(error => console.log(error))
    }

    showMap = () => (
        <View>
                <TouchableOpacity style={styles.showMap} onPress={() => this.props.navigation.navigate('ShowMaps', {data: this.state.array}) }>
                    <Text style={styles.title}>Show Map</Text>
                </TouchableOpacity>
            </View>
    )

    title = (type) => (
        <View>
                <View style={styles.titleView}>
                    <Text style={styles.title}>{type}</Text>
                    {this.showMap()}
                </View>
            </View>
    )

    render(){
        const {navigation} = this.props
        const {array} = this.state;
        const { type } = this.props.route.params;
        return(
            <SafeAreaView style={styles.container}>
                <BackHeader title="Back" navigation={navigation}/>
                {this.title(type)}
                <ListPageComponent list={array} navigation={navigation}/>
            </SafeAreaView>
        )
    }
}

export default ListPage;