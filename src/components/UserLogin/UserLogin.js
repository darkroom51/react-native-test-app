import React from 'react';
import {Button, TextInput, View} from 'react-native';

import {styles} from './style';
import {ROUTE_DETAILS} from "../../consts/router";
import {api} from '../../../App';


export default class UserLogin extends React.Component {
  state = {
    username: 'lipa',
    password: 'bedzie',

    data: null
  }


  submitForm = () => {
    if (this.state.username && this.state.password) {
      api.userLogin()
        .then(response => {
          if(response.status === 200) {
            this.props.navigation.navigate(ROUTE_DETAILS)
          }
        })
        .catch(e => console.log(e))
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.loginForm}>
          <TextInput
            style={styles.loginInput}
            onChangeText={(username) => this.setState({username})}
            value={this.state.username}
            placeholder="username"
            autoFocus={true}
          />
          <TextInput
            style={styles.loginInput}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
            placeholder="password"
          />
          <Button
            onPress={this.submitForm}
            title="Sign In"
            accessibilityLabel="Learn more about this sign in"
          />
        </View>
      </View>
    );
  }
}
