export default class Customer {
    constructor(id, name, addr1, addr2, city, state, zip) {
        this._id = id;
        this._name = name;
        this._addr1 = addr1;
        this._addr2 = addr2;
        this._city = city;
        this._state = state;
        this._zip = zip;
    }

    get id() { return this._id; }
    set id(newValue) { this._id = newValue; }
    get name() { return this._name; }
    set name(newValue) { this._name = newValue; }
    get addr1() { return this._addr1; }
    set addr1(newValue) { this._addr1 = newValue; }
    get addr2() { return this._addr2; }
    set addr2(newValue) { this._addr2 = newValue; }
    get city() { return this._city; }
    set city(newValue) { this._city = newValue; }
    get state() { return this._state; }
    set state(newValue) { this._state = newValue; }
    get zip() { return this._zip; }
    set zip(newValue) { this._zip = newValue; }
}