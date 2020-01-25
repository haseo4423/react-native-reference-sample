import { Container } from "unstated";
import Seeder from "../models/seeder/Seeder.js";

import axios from 'axios';
const INVOICE_API_ENDPOINT = 'http://192.168.11.17:8080/invoice.js';

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

    getDataFromServer() {
        this.setState({ isDataLoading: true });
        axios
            .get(INVOICE_API_ENDPOINT, { params: {} })
            .then(results => {
                console.log("HTTP Request succeeded.");
                console.log(results);
                this.setState({ data: results.data });
                this.setState({ isDataLoading: false });
            })
            .catch(() => {
                console.log("HTTP Request failed.");
                this.setState({ isDataLoading: false });
            });
    }
}