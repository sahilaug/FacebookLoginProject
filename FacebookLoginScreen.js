const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
  AccessToken
} = FBSDK;

import React, { Component } from 'react';
import {
  View,
  StyleSheet
  } from 'react-native';

class FacebookLoginScreen extends Component {
  goToHomePage(accessToken) {
    this.props.navigator.replace({id: 'Homepage'});
  }

  componentWillMount () {
    console.log(AccessToken)
    AccessToken.getCurrentAccessToken().then(
      (data) => {
        if(data)
        this.goToHomePage();
      }
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <LoginButton
          publishPermissions={["publish_actions"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("login has error: " + result.error);
              } else if (result.isCancelled) {
                alert("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    this.goToHomePage();
                  }
                )
              }
            }
          }
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
  }
});

export default FacebookLoginScreen;