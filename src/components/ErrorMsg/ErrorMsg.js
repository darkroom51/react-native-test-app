import React from 'react';
import {Button, Text, View} from 'react-native';

import {styles} from './style';


export default class ErrorMsg extends React.Component {
  render() {
    return (
      this.props.opened
        ?
      <View style={styles.errorContainer}>
        <Text style={styles.errorMessage}>
          {this.props.text}
        </Text>
        <Button
          onPress={this.props.closeErrorMsg}
          title="x"
        />
      </View>
        :
        null
    );
  }
}

