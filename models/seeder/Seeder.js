import Customer from "../Customer";
import Invoice from "../Invoice";
import Item from "../Item";
import Product from "../Product";

export default class Seeder {
    static getSeed() {
        return {
            customers: [
                new Customer(0, "ABC Store", "123 Abc St.", "", "New York", "NY", "10001"),
                new Customer(1, "123 Deli", "1 Def Ave.", "", "New York", "NY", "10002"),
                new Customer(2, "Xyz mart", "23 Xyz Blvd.", "", "New York", "NY", "10003")
            ],
            products: [
                new Product(0, "Blue ribbon", "B.R.", 10.5, 7.2),
                new Product(1, "Red ribbon", "R.R.", 9.5, 6.0),
                new Product(3, "White shirt", "W.S.", 15.0, 9.3)
            ],
            invoices: [
                new Invoice(0, "1/1/2019", 0, [new Item(0, 5, 0, 0), new Item(1, 3, 0, 0), new Item(2, 4, 0, 0)]),
                new Invoice(2, "1/1/2019", 0, [new Item(0, 7, 0, 0)])
            ]
        };
    }
}