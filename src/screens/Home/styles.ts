import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#131016',
      padding: 20,
    },
    eventData: {
      fontSize: 14,
      color: '#FCFDFE'
    },
    eventName: {
      marginTop: 48,
      fontSize: 22,
      fontWeight: 'bold',
      color: '#FCFDFE',
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
      backgroundColor: 'green',
      width: 44,
      height: 44,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
    
    },
    textButton: {
      color: '#FFF'
    },
    form: {
      marginTop: 44,
      marginBottom: 44,
      flexDirection: 'row',
      width: '100%',
    },
  })