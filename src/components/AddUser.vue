<template>
  <div class="AddUser">
    <b-navbar type="light" variant="light">
      <b-navbar-brand href="/">Run Logging</b-navbar-brand>
    </b-navbar>
    <form v-on:submit="addUser" class="inputForm">
      <div class="inputInfo">
        <h5>First Name</h5>
        <input type="text" v-model="newUser.firstName" placeholder="First Name">
      </div>
      <div class="inputInfo">
        <h5>Last Name</h5>
        <input type="text" v-model="newUser.lastName" placeholder="Last Name">
      </div>
      <div class="inputInfo">
        <h5>Age</h5>
        <input type="text" v-model="newUser.age" placeholder="Age">
      </div>
      <div class="inputInfo">
        <h5>Gender</h5>
        <input type="text" v-model="newUser.gender" placeholder="Gender">
      </div>
      <div class="inputInfo">
        <h5>Weight</h5>
        <input type="text" v-model="newUser.weight" placeholder="Weight in pounds (optional)">
      </div>
      <div class="inputInfo">
        <h5>Height</h5>
        <input type="text" v-model="newUser.height" placeholder="Height in FT'IN'' format (optional)">
      </div>
      <input type="submit" value="Submit" style="margin: auto; margin-top: 2px;">
    </form>
    <br />
    <ul id="infoList">
      <li v-for="(user, index) in users" :key="index" id="userInfoDisplay">
        {{user.firstName}} {{user.lastName}} {{user.age}} {{user.gender}} {{user.weight}} {{user.height}}
      </li>
    </ul>
  </div>
</template>

<script>
// const userRepository = require('../../core/Repositories/userRepository')

export default {
  name: 'AddUser',
  data() {
    return {
      title: 'AddUser',
      inputInfo: [
        'First Name',
        'Last Name',
        'Age',
        'Gender',
        'Weight',
        'Height'
      ],
      newUser: {},
      users: [
        {
          firstName: 'chris',
          lastName: 'jantzen',
          age: 21,
          gender: 'M',
          weight: 140,
          height: '5\'11"'
        }
      ]
    }
  },
  methods: {
    addUser: function(e) {
      e.preventDefault()
      // userRepository.createUser({
      //   firstName: this.newUser.firstName,
      //   lastName: this.newUser.lastName,
      //   age: this.newUser.age,
      //   gender: this.newUser.gender,
      //   weight: this.newUser.weight,
      //   height: this.newUser.height
      // })
      this.users.push({
        firstName: this.newUser.firstName,
        lastName: this.newUser.lastName,
        age: this.newUser.age,
        gender: this.newUser.gender,
        weight: this.newUser.weight,
        height: this.newUser.height
      })
    }
  }
}
</script>

<style scoped>
.AddUser {
  font-family: "Avenir", "Menlo", "Monaco";
  text-align: center;
}

#infoList {
  list-style-type: none;
}

#userInfoDisplay {
  font-size: 1.5em;
}

/* .inputInfo {
  display: inline-block;
}

.inputInfo > h5 {
  float: left;
  clear: left;
  text-align: right;
}

.inputInfo > input {
  float: left;
} */

.inputInfo {
  margin-top: 2px;
  margin-bottom: 2px;
  display: flex;
  flex-direction: row;
  margin: auto;
  padding: 2px;
}

.inputInfo > h5 {
  margin-right: 10px;
}

.inputInfo > input {
  width: 300px;
}

.inputForm {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
}
</style>
