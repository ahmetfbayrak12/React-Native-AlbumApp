/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import axios from 'axios';

import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';


class App extends Component { 
      render() {
        return (
          <View style={{ backgroundColor: 'white', flex: 1 }}>
            <Header headerText={'Albums'} />
            <AlbumList />
          </View>
        );
      }
}

AppRegistry.registerComponent('albums', () => App);
