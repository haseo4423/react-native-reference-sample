import * as React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import { Subscribe } from "unstated";

import { BarCodeScanner } from "expo-barcode-scanner";
import InvoiceContainer from "../containers/InvoiceContainer";

class BarcodeScannerScreenContent extends React.Component {
    state = {
        hasCameraPermission: null,
        scanned: false
    };

    async componentDidMount() {
        this.getPermissionsAsync();
    }

    getPermissionsAsync = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === "granted" });
    };

    render() {
        const { hasCameraPermission, scanned } = this.state;

        if (hasCameraPermission === null) {
            return <Text>Requesting for camera permission</Text>;
        }
        if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
        }

        return (
            <View style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "flex-end"
            }}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}
                />

                {scanned && <Button title={"Tap to Scan Again"} onPress={() => this.setState({ scanned: false })} />}
            </View>
        );
    }

    handleBarCodeScanned = ({ type, data }) => {
        this.setState({ scanned: true });
        let jsondata = {};
        if (this.isJson(data) && (jsondata = JSON.parse(data)).invoice_endpoint_url) {
            this.props.globalState.getDataFromServer(jsondata.invoice_endpoint_url);
            this.props.navigation.goBack();
        } else {
            alert("This is not a valid QR code.");
        }
    };

    isJson(str) {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    }
}

const BarcodeScannerScreen = ({ navigation }) => {
    return (
        <Subscribe to={[InvoiceContainer]}>
            {globalState => <BarcodeScannerScreenContent globalState={globalState} navigation={navigation} />}
        </Subscribe>
    );
};

export default BarcodeScannerScreen;