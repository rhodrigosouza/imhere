
import { StyleSheet, TouchableWithoutFeedback } from "react-native";

export const styles = StyleSheet.create({

    container: {
        width: '100%',
        flexDirection: 'row',
        marginBottom: 16,
      
    },

    nameBox: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 5,
    },

    text: {
        marginLeft: 12,
        color: 'black',
        flex: 1,
        fontSize: 16,
    },
    textInput: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 5,
        color: 'black',
        paddingLeft: 10,
        height: 44,
    },
    button: {
        marginLeft: 12,
        backgroundColor: 'red',
        width: 44,
        height: 44,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',

    },
    textButton: {
        color: '#FFF'
    },
})