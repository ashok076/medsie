import {StyleSheet} from 'react-native';

import {Color} from '../../assets/color/color.assets'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 15
    },
    titleView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    showMap: {
        borderWidth: 0.7,
        padding: 5,
        borderRadius: 5,
        margin: 1
    },
    title: {
        fontFamily: 'Asap-Regular',
        fontSize: 17,
        color: Color.txtGrey
    },
    showMap: {
        borderWidth: 0.7,
        borderColor: Color.grey,
        paddingRight: 15,
        paddingLeft: 15,
        paddingTop: 3,
        paddingBottom: 3,
        borderRadius: 5,
        margin: 1
    },
})

export default styles;