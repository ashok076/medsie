import {StyleSheet} from 'react-native';

import {Color} from '../../assets/color/color.assets'

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    container: {
        height: 140,
        width: '90%',
        padding: 10
    },
    info: {
        height: '100%',
        width: '80%',
        marginLeft: 10
    },
    title: {
        fontSize: 21,
        fontFamily: 'Asap-Regular'
    },
    caption: {
        fontSize: 14,
        fontFamily: 'Asap-Regular',
        color: Color.txtGrey,
    },
    min: {
        fontSize: 14,
        fontFamily: 'Asap-Regular',
        color: Color.purpleishBlue,
    },
    icon: {
        marginLeft: 15
    }
})

export default styles