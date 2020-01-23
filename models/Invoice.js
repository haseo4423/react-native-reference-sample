export default class Invoice {
    constructor(id, date, customer, items) {
        this._id = id;
        this._date = date;
        this._customer = customer;
        this._items = items;
    }

    get id() { return this._id; }
    set id(newValue) { this._id = newValue; }
    get date() { return this._date; }
    set date(newValue) { this._date = newValue; }
    get customer() { return this._customer; }
    set customer(newValue) { this._customer = newValue; }
    get items() { return this._items; }
    set items(newValue) { this._items = newValue; }

    addItem(item) {
        this._items.push(item);
    }
    removeItem(productId) {
        this._items = this._items.filter(item => item.product != productId);
    }
}