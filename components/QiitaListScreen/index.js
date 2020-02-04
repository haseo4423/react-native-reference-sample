import React, { Component } from "react";
import QiitaList from "./QiitaList.js";
import { createStackNavigator } from 'react-navigation-stack';
export default (createStackNavigator({
    QiitaList: QiitaList
}));
