import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './components/HomeScreen';
import InvoiceEditScreen from './components/InvoiceEditScreen';
import SummaryScreen from './components/SummaryScreen';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    InvoiceEdit: InvoiceEditScreen,
    Summary: SummaryScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
