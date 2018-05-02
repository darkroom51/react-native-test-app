import React from 'react';
import {Button, Text, View} from "react-native";

import {styles} from './style';
import {ROUTE_HOME} from "../../consts/router";
import {api} from '../../../App';


export default class UserDetails extends React.Component {
  state = {
    userData: null,
    signOutDisabled: false
  }

  componentDidMount() {
    if (api.isLogged) {
      api.getProfile()
        .then(response => this.setState({userData: response.data}))
        .catch(e => console.log(e))
    } else {
      this.props.navigation.navigate(ROUTE_HOME);
    }
  }

  signOut = () => {
    this.setState({signOutDisable: true});
    api.unSetUser();
    this.props.navigation.navigate(ROUTE_HOME);
  }


  render() {
    return (
      <View style={styles.container}>
        <Text>User Profile</Text>
        <View>
          {
            this.state.userData
              ?
              <View>
                <Text>{this.state.userData.id}</Text>
                <Text>{this.state.userData.name}</Text>
                <Text>{this.state.userData.username}</Text>
                <Text>{this.state.userData.email}</Text>
              </View>
              :
              <Text>Loading...</Text>
          }
        </View>
        <Button
          onPress={this.signOut}
          title="logout"
          disabled={this.state.signOutDisabled}
        />
      </View>
    );
  }
}
