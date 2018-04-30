import React from 'react';
import {Button, TextInput, View} from 'react-native';

import {styles} from './style';
import {ROUTE_DETAILS} from "../../consts/router";
import {api} from '../../../App'


export default class UserLogin extends React.Component {
  state = {
    username: '',
    password: '',

    data: null
  }

  componentDidMount() {
    api.getOneUser()
      .then(response => console.log(response))
  }

  submitForm = () => {
    if (this.state.username && this.state.password) {
      this.props.navigation.navigate(ROUTE_DETAILS);
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
