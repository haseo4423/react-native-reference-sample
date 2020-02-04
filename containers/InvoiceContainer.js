import { Container } from "unstated";
import Seeder from "../models/seeder/Seeder.js";

import axios from 'axios';
// const INVOICE_API_ENDPOINT = 'http://192.168.11.17:8080/invoice.js';

import { AsyncStorage } from 'react-native';

export default class InvoiceContainer extends Container {
    constructor(props = {}) {
        super();
        this.state = {
            data: props.initialSeeding ? Seeder.getSeed() : this.getEmptyData(),
            isDataLoading: false
        };
    }

    seed() {
        this.setState({ data: Seeder.getSeed() });
    }

    clear() {
        this.setState({ data: this.getEmptyData() });
    }

    getEmptyData() {
        return {
            customers: [],
            products: [],
            invoices: []
        };
    }

    getDataFromServers(endpoint) {
        this.setState({ isDataLoading: true });
        console.log(endpoint);
        axios
            .get(endpoint, { timeout: 3000 })
            .then(results => {
                console.log("HTTP Request succeeded.");
                console.log(results);
                this.setStateAndSave({ data: results.data });
                this.setState({ isDataLoading: false });
            })
            .catch(() => {
                console.log("HTTP Request failed.");
                this.setState({ isDataLoading: false });
            });
    }

    // Save data to the local storage, then setState.
    setStateAndSave = async updateStates => {
        try {
            for (var k in updateStates) {
                await AsyncStorage.setItem(k, JSON.stringify(updateStates[k]));
            }
            this.setState(updateStates);
        } catch (error) {
            // Error saving data
            console.log("invoice storage error");
        }
    };

    // Load data from the local storage
    load = async () => {
        try {
            const value = await AsyncStorage.getItem("data");
            if (value !== null) {
                // Data found
                this.setState({ data: JSON.parse(value) });
            } else {
                this.setState({ data: this.getEmptyData() });
            }
        } catch (error) {
            // Error retrieving data
            console.log("invoice storage error");
        }
    };
}