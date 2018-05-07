import React from 'react';
import { Button, TextInput, Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native';

import { styles } from './style';
import ErrorMsg from "../ErrorMsg/ErrorMsg";

import { inject, observer } from 'mobx-react';
import { ROUTE_HOME } from "../../consts/router";
import { api } from "../../../App";


@inject('NotesStore')
@observer
export default class Notes extends React.Component {
  state = {
    note: '',
    addNoteBtnDisabled: false,
    errorMsgOpened: false,
    errorMsgText: ''
  }

  componentDidMount() {
    if (!api.isLogged) {
      this.props.navigation.navigate(ROUTE_HOME);
    }
  }

  addNote = () => {
    if (this.state.note) {
      this.props.NotesStore.addNote(this.state.note);
      this.setState({ note: '' });
    }
  }

  deleteNote = (id) => {
    this.props.NotesStore.deleteNote(id)
  }

  closeErrorMsg = () => {
    this.setState({ errorMsgOpened: false });
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
            onChangeText={(note) => this.setState({ note })}
            value={this.state.note}
            placeholder="enter note"
            autoFocus={true}
          />
          <Button
            onPress={this.addNote}
            title="Add new"
            disabled={this.state.addNoteBtnDisabled}
          />
          <ScrollView>
            {
              this.props.NotesStore.notes.map(note => (
                <TouchableOpacity
                  key={note.id}
                  onPress={() => this.deleteNote(note.id)}
                  style={styles.listItem}
                >
                  <View>
                    <Text style={styles.listItemText}>
                      {note.text}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))
            }
          </ScrollView>
        </View>
      </View>
    );
  }
}
