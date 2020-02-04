import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Provider } from "unstated";

import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen/index';
import QiitaListScreen from './components/QiitaListScreen/index';

import InvoiceContainer from "./containers/InvoiceContainer";
import QiitaItemContainer from "./containers/QiitaItem";

import { Container, Header, Content, Spinner } from 'native-base';
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator(
  {
    Home: HomeScreen,
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
        <Container>
          <Header />
          <Content>
            <Spinner />
          </Content>
        </Container>
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
