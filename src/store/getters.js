export default{
    sectionThreeTitles(state) {
        return state.sectionThree.map((item) => item.title);
      },
      sectionFourTitles(state) {
        return state.sectionFour.map((item) => item.title);
      },
      getMessage(state) {
        return state.message;
      },
      getPersons: state => {
        return state.persons;
      },
}