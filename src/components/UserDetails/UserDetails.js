import React from 'react';
import {Button, Text, View} from "react-native";

import {styles} from './style';
import {ROUTE_HOME} from "../../consts/router";


export default class UserDetails extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello User Details</Text>
        <Button
          onPress={() => this.props.navigation.navigate(ROUTE_HOME)}
          title="back"
          accessibilityLabel="Learn more about this back"
        />
      </View>
    );
  }
}
