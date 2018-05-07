import React from 'react';
import {Provider} from 'mobx-react';

import {RootStack} from "./src/routes/router";
import ApiService from './src/api/api-service';
import {API_URL_BASE} from './src/consts/api';
import NotesStore from './src/stores/NotesStore';

export const api = new ApiService(API_URL_BASE);

export default class App extends React.Component {

  render() {
    return (
      <Provider NotesStore={NotesStore}>
        <RootStack/>
      </Provider>
    );
  }
}

