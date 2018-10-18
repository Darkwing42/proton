<template>
  <v-container v-if='this.loading'>
  <v-progress-circular id="loading"
      :size="70"
      :width="7"
      color="primary"
      indeterminate
    ></v-progress-circular>
  </v-container>
  
  <v-container v-else>
    <h1>Dashboard</h1>
  </v-container>
</template>

<script>
 import { mapState } from 'vuex'
export default {
 
  name: "Index",
  computed: {
    ...mapState({
      loading: state => state.loading
    })
  }
};
</script>

<style>
</style>
