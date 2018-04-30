import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';

export default class App extends React.Component {
    state ={
        text: ''
    }

    sendYourWisdom = () => {
        Alert.alert(`You answered: ${this.state.text}`);
    }

  render() {
    return (
      <View style={styles.container}>
        <Text>What is the meaning of life?</Text>


          <TextInput
              style={{height: 40, margin: 10, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
          />
          <Button
              containerViewStyle={{width: '100%', marginLeft: 0}}
              style={{width:100}}
              onPress={this.sendYourWisdom}
              title="Send your wisdom"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
          />
          <Text>{this.state.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
