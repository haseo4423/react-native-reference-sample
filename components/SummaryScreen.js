import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { Subscribe } from "unstated";

import InvoiceContainer from "../containers/InvoiceContainer";
import styles from '../styles.js';

class SummaryScreenContent extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Summary Screen</Text>
                <Button title="Modify Inv#2" onPress={() => {
                    let data = this.props.globalState.state.data;
                    data.invoices[1].date = "2/2/2020";
                    this.props.globalState.setState({ data: data });
                }} />
            </View>
        );
    }
}

const SummaryScreen = ({ navigation }) => (
    <Subscribe to={[InvoiceContainer]}>
        {globalState => <SummaryScreenContent globalState={globalState} navigation={navigation} />}
    </Subscribe>
);

export default SummaryScreen;