import { Container } from "unstated";

import axiosBase from 'axios';

import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';

const storage = new Storage({
    storageBackend: AsyncStorage,
});

const axios = axiosBase.create({
    baseURL: 'https://qiita.com',
    headers: {
        'Content-Type': 'application/json'
    },
    responseType: 'json',
    timeout: 3000
});

export default class QiitaItem extends Container {
    constructor(props) {
        super(props);
        this.state = {
            qiitaItems: this.getEmptyData(),
            isQiitaItemLoading: false
        };
    }

    clear() {
        this.setState({ qiitaItems: this.getEmptyData() });
    }

    getEmptyData() {
        return [];
    }

    getQiitaItems() {
        this.setState({
            qiitaItems: this.getEmptyData(),
            isQiitaItemLoading: true
        });
        storage.clearMapForKey('qiitaItem');
        axios.get('/api/v2/items?page=1&per_page=5')
            .then(results => {
                for (const key in results.data) {
                    this.setStateAndSave({
                        qiitaItem: results.data[key],
                        key: key
                    });
                }
                this.setState({ isQiitaItemLoading: false });
            })
            .catch((err) => {
                console.warn(err);
                this.setState({ isQiitaItemLoading: false });
            });
    }

    // Save data to the local storage, then setState.
    setStateAndSave = updateStates => {
        try {
            storage.save({
                key: 'qiitaItem',
                id: updateStates.key,
                data: updateStates.qiitaItem
            });
            this.state.qiitaItems.push(updateStates.qiitaItem);
        } catch (error) {
            // Error saving data
            console.log("qiita item storage error");
            console.warn(error);
        }
    };

    // Load data from the local storage
    load = async () => {
        try {
            await storage.getAllDataForKey('qiitaItem')
                .then(qiitaItems => {
                    this.setState({ qiitaItems: qiitaItems });
                })
                .catch(err => {
                    console.warn(err);
                    this.setState({ qiitaItems: getEmptyData() });
                })
        } catch (error) {
            // Error retrieving data
            console.log("qiita item storage error");
            console.warn(error);
        }
    };
}