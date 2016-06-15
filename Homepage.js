import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image
} from 'react-native';
const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
  GraphRequest,
  GraphRequestManager,
} = FBSDK;

class Homepage extends Component {

  //Create response callback.
  _responseInfoCallback = (error, result) => {
    if (error) {
      alert('Error fetching data: ' + error.toString());
    } else {
      this.setState({name: result.name, pic: result.picture.data.url});
    }
  }

  componentWillMount() {
    // Create a graph request asking for user information with a callback to handle the response.
    const infoRequest = new GraphRequest(
      '/me?fields=name,picture',
      null,
      this._responseInfoCallback
    );
    // Start the graph request.
    new GraphRequestManager().addRequest(infoRequest).start();
  }

  constructor() {
    super();
    this.state = {
      name : '',
      pic : ''
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcomeMsg}>Welcome</Text>
        <Text style={styles.name}>{this.state.name}</Text>
        <Image source={{uri:this.state.pic}} style={styles.image} />
        <LoginButton
          onLogoutFinished = {() => {
            this.props.navigator.replace({id:'FirstScreen'})
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image : {
    height : 200,
    width : 200,
    margin : 20
  },
  welcomeMsg : {
    fontSize : 40
  },
  name : {
    fontSize : 40
  }
});

export default Homepage;