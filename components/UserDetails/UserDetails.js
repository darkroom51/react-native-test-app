import React from 'react';
import {StyleSheet, View, Text, Button} from "react-native";




export default class UserDetails extends React.Component {


    render() {
        return (
            <View style={styles.container} >
                <Text>Hello User Details</Text>
                <Button
                    onPress={()=>{this.props.navigation.navigate('Home');}}
                    title="back"
                    accessibilityLabel="Learn more about this back"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        //flexDirection: 'row',
        height: '100%',
        padding: 20,
        backgroundColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
});



