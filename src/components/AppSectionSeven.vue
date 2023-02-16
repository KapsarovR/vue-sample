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
            <th></th>
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
        <thead v-for="(persons, index) in persons" :key="index">
          <tr>
            <th>
              <span>{{ index + 1 }}</span>
            </th>
            <th>{{ persons.firstName }}</th>
            <th>{{ persons.lastName }}</th>
            <th>
              <button @click="editPerson(index, persons.title)">
                {{ persons.edit ? "Save" : "Edit" }}
              </button>
              <button @click="removePerson(index)">X</button>
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
      newPerson: {
        firstName: "",
        lastName: "",
      },

      id: "ID",
      firstName: "First Name",
      lastName: "Last Name",

      persons: [
        {
          id: 1,
          firstName: "Risto",
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
          edit: true,
        },
      ],
    };
  },
  methods: {
    editPerson(index, title) {
      if (this.persons[index].edit) {
        this.persons[index].firstName = title;
      }
      this.persons[index].edit = !this.persons[index].edit;
    },
    addPerson() {
      const id = this.persons.length + 1;
      this.persons.push({ id, ...this.newPerson });
      this.newPerson = { firstName: "", lastName: "" };
      if (this.newPerson.firstName === "" || this.newPerson.lastName === "") {
        return false;
      }
    },
    removePerson(index) {
      this.persons.splice(index, 1);
    },
  },
};
</script>
