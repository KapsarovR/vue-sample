<template>
  <app-section
    :class="'section-seven'"
    :showLeftWrapper="false"
    :showRightWrapper="false"
  >
    <div class="card-wrapper">
      <table class="table-list">
        <thead>
          <tr>
            <th>{{ id }}</th>
            <th>{{ name }}</th>
            <th>{{ LastName }}</th>
            <th></th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <td></td>
            <td>
              <input
                type="text"
                id="name"
                v-model="newPerson.name"
                placeholder="First Name"
                @input="saveValue"
                value="inputValue"
              />
            </td>
            <td>
              <input
                type="text"
                id="lastName"
                v-model="newPerson.lastName"
                placeholder="Last Name"
                @input="saveValue"
                value="inputValue"
              />
            </td>
            <th>
              <button class="btn" @click="addPerson">Add</button>
            </th>
          </tr>
        </tfoot>
        <thead v-for="(task, index) in tasks" :key="index">
          <tr>
            <th>
              <span>{{ index + 1 }}</span>
            </th>
            <th>{{ task.name }}</th>
            <th>{{ task.lastName }}</th>
            <th>
              <button @click="editTask(index, task.title)">
                {{ task.edit ? "Save" : "Edit" }}
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
import AppSection from "./templates/AppSection.vue";
export default {
  components: { AppSection },
  props: ["inputData"],
  data() {
    return {
      newPerson: {
        name: "",
        lastName: "",
        inputValue: "",
      },

      id: "ID",
      name: "First Name",
      LastName: "Last Name",

      tasks: [
        {
          id: 1,
          name: "Risto",
          lastName: "Kapsarov",
          edit: false,
        },
        {
          id: 2,
          name: "Charles",
          lastName: "Leclerc",
          edit: false,
        },
        {
          id: 3,
          name: "Tony",
          lastName: "Parker",
          edit: false,
        },
        {
          id: 4,
          name: "Mick",
          lastName: "Schumacher",
          edit: false,
        },
        {
          id: 5,
          name: "Shekel",
          lastName: "O'neal",
          edit: false,
        },
        {
          id: 6,
          name: "Koby",
          lastName: "Braynt",
          edit: true,
        },
      ],
    };
  },
  methods: {
    saveValue(event) {
      this.inputValue = event.target.value;
    },

    saveMessage() {
      this.edit.push({ tasks: this.inputValue });
      this.inputValue = "";
    },

    editTask(index, msg) {
      if (this.tasks[index].edit) {
        this.tasks[index].name = msg;
      }
      this.tasks[index].edit = !this.tasks[index].edit;
    },
    addPerson() {
      const id = this.tasks.length + 1;
      this.tasks.push({ id, ...this.newPerson });
      this.newPerson = { name: "", lastName: "" };
    },
    removePerson(index) {
      this.tasks.splice(index, 1);
    },
  },
};
</script>
