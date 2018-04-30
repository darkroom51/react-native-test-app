import React from 'react';
import {StyleSheet, Text, View, Button, TextInput, Alert} from 'react-native';


export default class UserLogin extends React.Component {
    state = {
        username: '',
        password:''
    }

    submitForm = () => {
        if (this.state.username && this.state.password) {
            this.props.navigation.navigate('Details');
        }
    }

    render() {
        return (
            <View style={styles.container}>

                {/*<View style={styles.loginCaption}>*/}
                    {/*<Text>Sign in to see nothing</Text>*/}
                {/*</View>*/}

                <View style={styles.loginForm}>
                    <TextInput
                        style={{height: 40, margin: 10}}
                        onChangeText={(username) => this.setState({username})}
                        value={this.state.username}
                        placeholder={"username"}
                        autoFocus={true}
                    />

                    <TextInput
                        style={{height: 40, margin: 10}}
                        onChangeText={(password) => this.setState({password})}
                        value={this.state.password}
                        placeholder={"password"}
                    />

                    <Button
                        onPress={this.submitForm}
                        title="Sign In"
                        accessibilityLabel="Learn more about this sign in"
                    />
                    <Text>{this.state.text}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: '100%',
        padding: 20,
        paddingTop: 50,
        backgroundColor: '#eee',
        //alignItems: 'center',
        justifyContent: 'center'
    },
    loginCaption: {
        width: '100%'
    },
    loginForm: {
        flex:1
    }
});
