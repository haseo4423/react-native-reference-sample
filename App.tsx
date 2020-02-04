import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Provider } from "unstated";

import HomeScreen from './components/HomeScreen';
import InvoiceEditScreen from './components/InvoiceEditScreen';
import SummaryScreen from './components/SummaryScreen';
import BarcodeScannerScreen from './components/BarcodeScannerScreen';
import ProfileScreen from './components/ProfileScreen/index';
import QiitaListScreen from './components/QiitaListScreen/index';

import InvoiceContainer from "./containers/InvoiceContainer";
import QiitaItemContainer from "./containers/QiitaItem";

import { View, Text } from "react-native";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

// const RootStack = createStackNavigator(
//   {
//     Home: HomeScreen,
//     InvoiceEdit: InvoiceEditScreen,
//     Summary: SummaryScreen,
//     BarcodeScanner: BarcodeScannerScreen
//   },
//   {
//     initialRouteName: 'Home',
//   }
// );

const Drawer = createDrawerNavigator(
  {
    Home: HomeScreen,
    InvoiceEdit: InvoiceEditScreen,
    Summary: SummaryScreen,
    BarcodeScanner: BarcodeScannerScreen,
    Profile: ProfileScreen,
    QiitaList: QiitaListScreen
  }
)

const AppContainer = createAppContainer(Drawer);

export default class App extends React.Component {
  // ロードが終わるまでは「loading...」を表示するため、state isReadyで制御
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }

  // DidMountのタイミングでフォントリソースをメモリ上に読み込み。終わったらisReadyをオン。
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });
    this.setState({ isReady: true });
  }

  render() {
    // Wait for font loading... フォントの読み込み中なら「loading...」を表示
    if (!this.state.isReady) {
      return (
        <View>
          <Text>loading...</Text>
        </View>
      );
    }

    let globalState = new InvoiceContainer({ initialSeeding: true });
    let qiitaItemState = new QiitaItemContainer();
    globalState.load();
    qiitaItemState.load();
    return (
      <Provider inject={[globalState, qiitaItemState]}>
        <AppContainer />
      </Provider>
    );
  }
}
