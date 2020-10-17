import {StyleSheet} from 'react-native';

import {Color} from '../../assets/color/color.assets'

const styles = StyleSheet.create({
    placeholder:  {
        fontSize: 15,
        color: Color.grey
    },
    editTextView: {
        marginTop: 10
    },
    input: {
        color: "#000000",
        borderRadius: 5,
        height: 48,
        width: "100%",
        borderColor: Color.grey,
        padding: 12,
        fontSize: 17,
        borderWidth: 0.5
    }
})

export default styles