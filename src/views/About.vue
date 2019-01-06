<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>last edited user name: {{username}}</p>
  </div>
</template>

<script>
  export default {
    name: 'about',
    computed: {
      username() {
        console.log(this.$store.state);
        return this.$store.state.username;
      }
    }
  }
</script>