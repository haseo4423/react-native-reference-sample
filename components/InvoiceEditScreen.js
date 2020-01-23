import React from 'react';
import { Button, Text, View, Modal, Alert } from 'react-native';
import styles from '../styles.js';

export default class InvoiceEditScreen extends React.Component {
    state = {
        modalPaymentVisible: false,
        modalPrintVisible: false,
    };

    setModalPaymentVisible(visible) {
        this.setState({ modalPaymentVisible: visible });
    }
    setModalPrintVisible(visible) {
        this.setState({ modalPrintVisible: visible });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Invoice Edit Screen</Text>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalPaymentVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={styles.modal}>
                        <Text style={{ color: '#fff' }}>Payment popup</Text>
                        <Button
                            title="Hide modal"
                            onPress={() => {
                                this.setModalPaymentVisible(false);
                            }}>
                        </Button>
                        <Button
                            title="Go to Print"
                            onPress={() => {
                                this.setModalPaymentVisible(false);
                                this.setModalPrintVisible(true);
                            }}>
                        </Button>
                    </View>
                </Modal>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalPrintVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={styles.modal}>
                        <Text style={{ color: '#fff' }}>Print popup</Text>
                        <Button
                            title="Hide modal"
                            onPress={() => {
                                this.setModalPrintVisible(false);
                                this.props.navigation.goBack();
                            }}>
                        </Button>
                    </View>
                </Modal>
                <Button
                    title="Show modal"
                    onPress={() => {
                        this.setModalPaymentVisible(true);
                    }}>
                </Button>
            </View>
        );
    }
}