<template>
  <div v-if="!!characters.length" class="result-list columns is-multiline">
    <div
      v-for="character in characters"
      :key="character.id"
      class="column is-4-desktop is-6-tablet is-12-mobile"
    >
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img :src="character.image" alt />
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <h2 class="title is-4">{{ character.name }}</h2>
            </div>
          </div>
          <div class="content">{{ character.description | stripHtml }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["characters"])
  },
  filters: {
    stripHtml(tags) {
      const div = document.createElement("div");
      div.innerHTML = tags;
      const text = div.textContent || div.innerText || "";
      return text;
    }
  }
};
</script>

<style scoped>
.result-list {
  margin-top: 50px;
  padding-bottom: 150px;
}

.card {
  height: 100%;
}
</style>
