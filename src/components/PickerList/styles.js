import {Dimensions, Platform, StyleSheet} from 'react-native'

export default StyleSheet.create({
    formItem: {
        marginLeft: 0,
        height: 65,
        flexDirection: 'row'
    },
    inputLabel: {
        paddingTop: 20,
        position: 'absolute',
        color: '#9F9F9F'
    },
    inputLabelActive: {
        paddingTop: 5,
        position: 'absolute',
        color: '#9F9F9F'
    },
    inputStyle: {
        marginTop: 23,
        marginLeft: 0,
        padding: 0,
        paddingTop: 12,
        width: Dimensions.get('window').width,
        ...Platform.select({
            android: {
                marginLeft: -8,
                marginBottom: -6,
            },
        }),
    },
    emptyValueInputStyle: {
        marginTop: 23,
        marginLeft: 0,
        padding: 0,
        paddingTop: 12,
        width: Dimensions.get('window').width,
        ...Platform.select({
            android: {
                marginLeft: -8,
                marginBottom: -6,
                opacity: 0
            },
        }),
    },
    errorMessage: {
        color: '#cc4133',
        marginTop: 5,
        fontSize: 14
    },
    pickerTextStyle: {
        paddingLeft: 0,
    },
    pickerTextStyleInactive: {
        color: 'transparent',
        paddingLeft: 0,
    },
    headerStyle: {
        backgroundColor: 'black'
    },
    headerBackButtonTextStyle: {
      color: 'black'
    },
    headerTitleStyle: {
        color: 'black'
    },
   
});