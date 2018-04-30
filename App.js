import React from 'react';
import {StackNavigator} from 'react-navigation';

import UserLogin from './components/UserLogin/UserLogin';
import UserDetails from './components/UserDetails/UserDetails';


export default class App extends React.Component {


    render() {
        return (
            <RootStack/>
        );
    }
}

const RootStack = StackNavigator(
    {
        Home: {
            screen: UserLogin,
        },
        Details: {
            screen: UserDetails,
        },
    },
    {
        initialRouteName: 'Home',
    }
);


