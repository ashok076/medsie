import {StyleSheet} from 'react-native';

import {Color} from '../../assets/color/color.assets'

const styles = StyleSheet.create({ 
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    container: {
        width: '100%',
        padding: 15,
        marginTop: 10
    },
    info: {
        height: '100%',
        width: '80%',
        marginLeft: 10
    },
    title: {
        fontFamily: 'Asap-SemiBold',
        fontSize: 18
    },
    text: {
        fontSize: 14,
        fontFamily: 'Asap-Regular',
    },
    icon: {
        marginLeft: 15
    },
    image: {
        height: 80,
        width: 80
    },
    textContainer: {
        marginLeft: 20,
    },
    buttonContainer: {
        marginTop: 10
    }
 })

 export default styles