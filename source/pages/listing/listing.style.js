import {StyleSheet} from 'react-native';

import {Color} from '../../assets/color/color.assets'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    border: {
        borderBottomWidth: 0.5,
        borderColor: Color.txtGrey,
        marginTop: 11
    },
    innerContainer: {
        padding: 10
    }
})

export default styles