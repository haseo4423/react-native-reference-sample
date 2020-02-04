export default class QiitaItem {
    constructor(id, title, url) {
        this._id = id;
        this._title = title;
        this._url = url;
    }

    get id() { return this._id; }
    set id(newValue) { this._id = newValue; }
    get title() { return this._title; }
    set title(newValue) { this._title = newValue; }
    get url() { return this._url; }
    set url(newValue) { this._url = newValue; }
}