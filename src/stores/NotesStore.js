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
    const tmp = this.notes.filter(el => el.id !== id);
    this.notes = [...tmp];  
  }

}

const notesStore = new NotesStore();
export default notesStore;