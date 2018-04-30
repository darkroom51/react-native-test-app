import React from 'react';
import {RootStack} from "./src/routes/router";
import ApiService from './src/api/api-service'

export const api = new ApiService('https://jsonplaceholder.typicode.com');


export default class App extends React.Component {

  render() {
    return (
      <RootStack/>
    );
  }
}

