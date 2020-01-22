import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';
import uploadToAnonymousFilesAsync from 'anonymous-files';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, NavigationStackProp } from 'react-navigation-stack';

type Props = {
  navigation: NavigationStackProp<{ userId: string }>;
};

class HomeScreen extends React.Component<Props> {
  render() {
    // let [selectedImage, setSelectedImage] = React.useState(null);

    // let openImagePickerAsync = async () => {
    //   let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    //   if (permissionResult.granted === false) {
    //     alert("permission to access camera roll is required!");
    //     return;
    //   }

    //   let pickerResult = await ImagePicker.launchImageLibraryAsync();

    //   if (pickerResult.cancelled === true) {
    //     return;
    //   }

    //   if (Platform.OS === 'web') {
    //     let remoteUri = await uploadToAnonymousFilesAsync(pickerResult.uri);
    //     setSelectedImage({ localUri: pickerResult.uri, remoteUri });
    //   } else {
    //     setSelectedImage({ localUri: pickerResult.uri, remoteUri: null });
    //   }
    // };

    // let openShareDialogAsync = async () => {
    //   if (!(await Sharing.isAvailableAsync())) {
    //     alert(`The image is available for sharing at: ${selectedImage.remoteUri}`);
    //     return;
    //   }

    //   Sharing.shareAsync(selectedImage.remoteUri || selectedImage.localUri);
    // };

    // if (selectedImage !== null) {
    //   return (
    //     <View style={styles.container}>
    //       <Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} />

    //       <TouchableOpacity onPress={openShareDialogAsync} style={styles.button}>
    //         <Text style={styles.buttonText}>Share this photo</Text>
    //       </TouchableOpacity>
    //     </View>
    //   )
    // }

    // return (
    //   <View style={styles.container}>
    //     <Image source={{ uri: "https://i.imgur.com/TkIrScD.png" }} style={styles.logo} />

    //     <Text style={styles.instructions}>
    //       To share a photo from your phone with a friend. just press the button below!
    //   </Text>

    //     <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
    //       <Text style={styles.buttonText}>Pick a photo</Text>
    //     </TouchableOpacity>
    //   </View>
    // );
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Hello World!</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 10,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
  },
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain"
  }
});

class DetailScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailScreen,
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
