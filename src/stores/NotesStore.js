import { observable, action, computed } from 'mobx';

class NotesStore {
  @observable notes = [];

  @action
  addNote = note => {
    this.notes.push(note);
  }

}

const notesStore = new NotesStore();
export default notesStore;