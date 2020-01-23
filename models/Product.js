export default class Product {
    constructor(id, name, shortName, price, cost) {
        this._id = id;
        this._name = name;
        this._shortName = shortName;
        this._price = price;
        this._cost = cost;
    }

    get id() { return this._id; }
    set id(newValue) { this._id = newValue; }
    get name() { return this._name; }
    set name(newValue) { this._name = newValue; }
    get shortName() { return this._shortName; }
    set shortName(newValue) { this._shortName = newValue; }
    get price() { return this._price; }
    set price(newValue) { this._price = newValue; }
    get cost() { return this._cost; }
    set cost(newValue) { this._cost = newValue; }
}