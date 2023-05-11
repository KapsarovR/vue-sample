export default{
    setFirstName({ commit }, firstName) {
        commit("setFirstName", firstName);
      },
      setLastName({ commit }, lastName) {
        commit("setLastName", lastName);
      },
      setEmail({ commit }, email) {
        commit("setEmail", email);
      },

      incrementSectionThree({ commit }, index) {
        commit("incrementSectionThree", index);
      },
      decrementSectionThree({ commit }, index) {
        commit("decrementSectionThree", index);
      },
      incrementSectionFour({ commit }, index) {
        commit("incrementSectionFour", index);
      },
      
      editPerson({ commit }, index) {
        commit('editPerson', index);
      },
      savePerson({ commit }, index) {
        commit('savePerson', index);
      },
      addPerson({ commit }) {
        commit('addPerson');
      },
      veryfyDelete({ commit }, index) {
        commit('veryfyDelete', index);
      },    
      removePerson({ commit , index}) {
        commit('removePerson' , index);
      },
      closePerson({ commit, index }) {
        commit('closePerson' ,index);
      }
}