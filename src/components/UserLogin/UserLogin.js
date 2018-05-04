import React from 'react';
import {Button, TextInput, View} from 'react-native';

import {styles} from './style';
import {ROUTE_DETAILS} from "../../consts/router";
import {api} from '../../../App';
import ErrorMsg from "../ErrorMsg/ErrorMsg";


export default class UserLogin extends React.Component {
  state = {
    username: '',
    password: '',
    signInDisabled: false,
    errorMsgOpened: false,
    errorMsgText: ''
  }


  signIn = () => {
    if (this.state.username && this.state.password) {
      api.userLogin(this.state.username, this.state.password)
        .then(data => {
          this.setState({signInDisabled: true});
          this.props.navigation.navigate(ROUTE_DETAILS)
        })
        .catch(e => {
          this.setState({errorMsgOpened: true, errorMsgText: e.message});
        })
    }
  }

  closeErrorMsg = () => {
    this.setState({errorMsgOpened: false});
  }

  render() {
    return (
      <View style={styles.container}>
        <ErrorMsg
          opened={this.state.errorMsgOpened}
          text={this.state.errorMsgText}
          closeErrorMsg={this.closeErrorMsg}
        />
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
            onPress={this.signIn}
            title="Sign In"
            accessibilityLabel="Learn more about this sign in"
            disabled={this.state.signInDisabled}
          />
        </View>
      </View>
    );
  }
}
