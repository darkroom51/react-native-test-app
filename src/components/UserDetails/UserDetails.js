import React from 'react';
import {Button, Text, View} from "react-native";

import {styles} from './style';
import {ROUTE_HOME} from "../../consts/router";
import {api} from '../../../App';


export default class UserDetails extends React.Component {
  state = {
    userData: null,
    isLogged: false
  }

  componentDidMount() {
    if (api.isLogged) {
      this.setState({isLogged: true});
      api.getProfile()
        .then(response => this.setState({userData: response.data}))
        .catch(e => console.log(e))
    }
  }

  signOut = () => {
    api.unSetUser();
    console.log(api.user)
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
          onPress={() => this.props.navigation.navigate(ROUTE_HOME)}
          title="back"
          accessibilityLabel="Learn more about this back"
        />
        <Button
          onPress={this.signOut}
          title="logout"
        />
      </View>
    );
  }
}
