import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    placeholder:  {
        fontSize: 18,
        alignItems: 'flex-start'
    },
    editTextView: {
        marginTop: 15
    },
    input: {
        color: "#000000",
        borderRadius: 5,
        height: 150,
        width: "100%",
        borderColor: "#000",
        padding: 15,
        fontSize: 17,
        borderWidth: 0.5,
        textAlignVertical: 'top'
    },
    titleView: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    message: {
        fontSize: 15,
    },
})

export default styles