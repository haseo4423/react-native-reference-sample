import { Container } from "unstated";
import Seeder from "../models/seeder/Seeder.js";

export default class InvoiceContainer extends Container {

    constructor(props = {}) {
        super();
        this.state = {
            data: props.initialSeeding ? Seeder.getSeed() : this.getEmptyData()
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
}