<template>
  <form @submit.prevent @submit="handleSearch()" class="search-form">
    <div class="field is-grouped is-grouped-centered">
      <div class="control search-box is-expanded">
        <input
          class="input"
          type="text"
          placeholder="Enter a superhero's name here..."
          v-model="name"
        />
      </div>
      <div class="control">
        <button class="button is-info">Search</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: ""
    };
  },

  methods: {
    handleSearch() {
      this.$store.dispatch("FETCH_CHARACTERS", this.name);
    }
  }
};
</script>

<style scoped>
.search-form {
  padding-top: 10px;
}
</style>
