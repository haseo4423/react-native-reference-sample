export default class Item {
    constructor(product, qty, adjust, credit) {
        this._product = product; // Product id
        this._qty = qty; // Quantity scheduled
        this._adjust = adjust; // Adjustment on site
        this._credit = credit; // Returned quantity
    }

    get product() { return this._product; }
    set product(newValue) { this._product = newValue; }
    get qty() { return this._qty; }
    set qty(newValue) { this._qty = newValue; }
    get adjust() { return this._adjust; }
    set adjust(newValue) { this._adjust = newValue; }
    get credit() { return this._credit; }
    set credit(newValue) { this._credit = newValue; }
}