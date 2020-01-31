import React, { Component } from "react";
import Profile from "./Profile.js";
import EditScreenOne from "./EditScreenOne.js";
import { createStackNavigator } from 'react-navigation-stack';
export default (createStackNavigator({
    Profile: Profile,
    EditScreenOne: EditScreenOne
}));
