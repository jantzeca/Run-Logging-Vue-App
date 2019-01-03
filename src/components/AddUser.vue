<template>
  <div class="AddUser">
    <b-navbar type="light" variant="light">
      <b-navbar-brand>{{title}}</b-navbar-brand>
    </b-navbar>
    <ul id="infoList">
      <li v-for="(info, index) in inputInfo" :key="index">
        {{info}}
        <input type="text">
      </li>
    </ul>
  </div>
</template>

<script>
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
      ]
    }
  },
  methods: {

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
</style>
