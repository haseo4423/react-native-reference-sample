import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight
    },
    modal: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0, 0.8)',
        alignItems: 'center',
        justifyContent: 'center',
    },
});