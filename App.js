import React from 'react';
import {RootStack} from "./src/routes/router";
import ApiService from './src/api/api-service';
import {API_URL_BASE} from './src/consts/api';

export const api = new ApiService(API_URL_BASE);

export default class App extends React.Component {

  render() {
    return (
      <RootStack/>
    );
  }
}

