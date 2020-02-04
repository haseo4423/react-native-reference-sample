import React from "react";
import { Subscribe } from "unstated";
import { AppRegistry } from "react-native";
import { Container, Header, Left, Body, Title, Content, Right, Icon, Button, Text, List, ListItem, Thumbnail, Toast, Spinner } from "native-base";
import QiitaItemContainer from "../../containers/QiitaItem";
import QiitaItem from '../../models/QiitaItem.js';
import { Linking } from 'expo';

class QiitaListContent extends React.Component {
    constructor(props) {
        super(props);
        this.onImportClick = this.onImportClick.bind(this);
    }

    onImportClick() {
        this.props.qiitaItemState.getQiitaItems();
    }

    onLinkClick = (url) => {
        Linking.canOpenURL(url).then(supported => {
            if (!supported) {
                console.log('無効なURLです: ' + url);
                Toast.show({
                    text: '無効なURLです: ' + url,
                    buttonText: '閉じる'
                });
            } else {
                return Linking.openURL(url);
            }
        }).catch(err => {
            console.error('URLを開けませんでした。', err);
            Toast.show({
                text: 'URLを開けませんでした。',
                buttonText: '閉じる'
            });
        });
    }

    render() {
        let qiitaItemState = this.props.qiitaItemState;
        let qiitaItemList = <Text>No qiita item</Text>

        // Wait for data loading...
        if (qiitaItemState.state.isQiitaItemLoading) {
            return (
                <Container>
                    <Content padder>
                        <Spinner />
                    </Content>
                </Container>
            );
        }

        if (qiitaItemState.state.qiitaItems.length) {
            qiitaItemList = (
                <List>
                    {qiitaItemState.state.qiitaItems.map(qiitaItem => {
                        return (
                            <ListItem thumbnail key={qiitaItem.id}>
                                <Left>
                                    <Thumbnail square source={{ uri: qiitaItem.user.profile_image_url }} />
                                </Left>
                                <Body>
                                    <Text>{qiitaItem.title}</Text>
                                    <Text note numberOfLines={1}>{qiitaItem.updated_at}</Text>
                                </Body>
                                <Right>
                                    <Button transparent onPress={() => this.onLinkClick(qiitaItem.url)}>
                                        <Text>View</Text>
                                    </Button>
                                </Right>
                            </ListItem>
                        );
                    })}
                </List>
            );
        }

        return (
            <Container>
                <Content padder>
                    {qiitaItemList}
                    <Button full rounded primary
                        style={{ marginTop: 10 }}
                        onPress={() => this.onImportClick()}>
                        <Text>Import</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

const QiitaList = ({ navigation }) => {
    return (
        <Subscribe to={[QiitaItemContainer]}>
            {qiitaItemState => <QiitaListContent qiitaItemState={qiitaItemState} navigation={navigation} />}
        </Subscribe>
    );
}

QiitaList.navigationOptions = ({ navigation }) => ({
    header: () =>
        <Header>
            <Left>
                <Button transparent onPress={() => navigation.openDrawer()}>
                    <Icon name="menu" />
                </Button>
            </Left>
            <Body>
                <Title>QiitaList</Title>
            </Body>
            <Right />
        </Header>
});

export default QiitaList;
