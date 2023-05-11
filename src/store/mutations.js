export default {
  setFirstName(state, firstName) {
    state.form.firstName = firstName;
  },
  setLastName(state, lastName) {
    state.form.lastName = lastName;
  },
  setEmail(state, email) {
    state.form.email = email;
  },

  incrementSectionThree(state, index) {
    state.sectionThree[index].counter++;
  },
  decrementSectionThree(state, index) {
    if (state.sectionThree[index].counter > 0) {
      state.sectionThree[index].counter--;
    }
  },
  incrementSectionFour(state, index) {
    state.sectionFour[index].counter++;
  },

  reverseMessage(state) {
    state.message = state.message.split("").reverse().join("");
  },
  setMessage(state, newMessage) {
    state.message = newMessage;
  },
  editPerson(state, index) {
    state.persons[index].edit = true;
  },
  savePerson(state, index) {
    state.persons[index].edit = false;
  },
  addPerson(state) {
    const id = state.persons.length + 1;
    if (state.newPerson.firstName === "" && state.newPerson.lastName === "") {
      return false;
    } else {
      state.persons.push({ id, ...state.newPerson });
      state.newPerson = { firstName: "", lastName: "", edit: false };
    }
  },
};
