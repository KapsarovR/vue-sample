<template>
  <app-section
    :class="'section-seven'"
    :showLeftWrapper="false"
    :showRightWrapper="false"
  >
    <div>
      <table class="table-list">
        <thead>
          <tr>
            <th>{{ id }}</th>
            <th>{{ firstName }}</th>
            <th>{{ lastName }}</th>
            <th>
              <div v-if="showModal">
                <span class="clear_item">To dalete this item ?</span>
                <br />
                <button @click="removePerson">Yes</button>
                <button @click="closePerson">No</button>
              </div>
            </th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <td></td>
            <td>
              <input
                type="text"
                v-model="newPerson.firstName"
                placeholder="First Name"
              />
            </td>
            <td>
              <input
                type="text"
                v-model="newPerson.lastName"
                placeholder="Last Name"
              />
            </td>
            <th>
              <button class="btn" @click="addPerson">Add</button>
            </th>
          </tr>
        </tfoot>
        <thead v-for="(person, index) in persons" :key="index">
          <tr>
            <th>
              <span>{{ index + 1 }}</span>
            </th>
            <th>
              <span v-if="!person.edit">{{ person.firstName }}</span>
              <input
                v-else
                type="text"
                v-model="person.firstName"
                placeholder="First Name"
              />
            </th>
            <th>
              <span v-if="!person.edit">{{ person.lastName }}</span>
              <input
                v-else
                type="text"
                v-model="person.lastName"
                placeholder="Last Name"
              />
            </th>
            <th>
              <button v-if="!person.edit" @click="editPerson(index)">
                Edit
              </button>
              <button v-else @click="savePerson(index)">Save</button>
              <button @click="veryfyDelete(index)">X</button>
            </th>
          </tr>
        </thead>
      </table>
    </div>
  </app-section>
</template>

<script>
import AppSection from "@/components/templates/AppSection.vue";
export default {
  components: { AppSection },
  props: ["inputData"],
  data() {
    return {
      showModal: false,
      selectedIndex: null,
      newPerson: {
        firstName: "",
        lastName: "",
        edit: false,
      },

      id: "ID",
      firstName: "First Name",
      lastName: "Last Name",

      persons: [
        {
          id: 1,
          firstName: "Riste",
          lastName: "Kapsarov",
          edit: false,
        },
        {
          id: 2,
          firstName: "Charles",
          lastName: "Leclerc",
          edit: false,
        },
        {
          id: 3,
          firstName: "Tony",
          lastName: "Parker",
          edit: false,
        },
        {
          id: 4,
          firstName: "Mick",
          lastName: "Schumacher",
          edit: false,
        },
        {
          id: 5,
          firstName: "Shekel",
          lastName: "O'neal",
          edit: false,
        },
        {
          id: 6,
          firstName: "Koby",
          lastName: "Braynt",
          edit: false,
        },
      ],
    };
  },
  methods: {
    editPerson(index) {
      this.persons[index].edit = true;
    },
    savePerson(index) {
      this.persons[index].edit = false;
    },
    addPerson() {
      const id = this.persons.length + 1;
      if (this.newPerson.firstName === "" && this.newPerson.lastName === "") {
        return false;
      } else {
        this.persons.push({ id, ...this.newPerson });
        this.newPerson = { firstName: "", lastName: "", edit: false };
      }
    },
    veryfyDelete(index) {
      this.selectedIndex = index;
      this.showModal = true;
    },
    removePerson() {
      this.persons.splice(this.selectedIndex, 1);
      this.selectedIndex = null;
      this.showModal = false;
    },
    closePerson() {
      this.showModal = false;
      this.selectedIndex = null;
    },
  },
};
</script>
