import { observable, action, computed } from 'mobx';

class NotesStore {
  @observable notes = [];

  @action
  addNote = note => {
    this.notes.push({
      id: Date.now(),
      text: note
    });
  }

  @action
  deleteNote = id => {
    const notes = this.notes.slice();
    this.notes = notes.filter(note => note.id !== id);
  }

}

const notesStore = new NotesStore();
export default notesStore;