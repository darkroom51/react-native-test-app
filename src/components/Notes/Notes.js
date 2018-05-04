import React from 'react';
import {Button, TextInput, Text, View} from 'react-native';

import {styles} from './style';
import ErrorMsg from "../ErrorMsg/ErrorMsg";

import { inject, observer } from 'mobx-react';
import {ROUTE_HOME} from "../../consts/router";
import {api} from "../../../App";


@inject('NotesStore')
@observer
export default class Notes extends React.Component {
  state = {
    notes: [],
    note:'',
    addNoteBtnDisabled: false,
    errorMsgOpened: false,
    errorMsgText: ''
  }

  // componentDidMount() {
  //   if (api.isLogged) {
  //     api.getProfile()
  //       .then(response => this.setState({userData: response.data}))
  //       .catch(e => console.log(e))
  //   } else {
  //     this.props.navigation.navigate(ROUTE_HOME);
  //   }
  // }

  addNote = () => {
      //this.setState({addNoteBtnDisabled: true});
      this.props.NotesStore.addNote(this.state.note);
  }

  closeErrorMsg = () => {
    this.setState({errorMsgOpened: false});
  }

  render() {
    console.log(this.props.NotesStore.notes);

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
            onChangeText={(note) => this.setState({note})}
            value={this.state.note}
            placeholder="enter note"
            autoFocus={true}
          />
          <Button
            onPress={this.addNote}
            title="Add new"
            accessibilityLabel="Learn more about this sign in"
            disabled={this.state.addNoteBtnDisabled}
          />
          <View>
            {
              this.props.NotesStore.notes.map(el => (
                <Text>{el}</Text>
              ))
            }
          </View>
        </View>
      </View>
    );
  }
}
