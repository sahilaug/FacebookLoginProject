/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  Text,
  View
} from 'react-native';

class FacebookLoginProject extends Component {

  render() {
    return (
      <Navigator
        initialRoute={{id: 'FirstScreen', name: 'Index'}}
        renderScene={this.renderScene.bind(this)}
        configureScene={(route) => {
            if (route.sceneConfig) {
              return route.sceneConfig;
            }
            return Navigator.SceneConfigs.FloatFromRight;
          }} />
    );
  }

  renderScene(route, navigator) {
    var routeId = route.id;
    if (routeId === 'FirstScreen') {
      return (
        <FirstScreen
          navigator={navigator} />
      );
    }
    if (routeId === 'FacebookLoginScreen') {
      return (
        <FacebookLogin
          navigator={navigator} />
      );
    }
    if (routeId === 'Homepage') {
      return (
        <Homepage
          navigator={navigator} />
      );
    }
  }
}

AppRegistry.registerComponent('FacebookLoginProject', () => FacebookLoginProject);
