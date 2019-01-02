<template>
  <div class="Homepage">
    <b-navbar
      toggleable="md"
      type="light"
      variant="light"
    >
      <b-navbar-brand href="/">Running Log</b-navbar-brand>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Homepage',
  data() {
    return {
      title: 'Homepage',
      showDismissibleAlert: true
    }
  }
}
</script>

<style scoped>
.Homepage {
  font-family: "Avenir", "Menlo", "Monaco";
  text-align: center;
}
</style>
