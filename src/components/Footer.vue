<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        Made with
        <span role="img" aria-label="a laptop computer">💻</span>,
        <span role="img" aria-label="a cup of tea">☕</span> and
        <span role="img" aria-label="love">❤️</span> by
        <a target="_blank" href="https://github.com/vinnlee/">Vincent Lee</a>
      </p>
      <p>
        Data provided by
        <a target="_blank" href="https://marvel.com/">Marvel</a>.
      </p>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters["copyrights"]
  }
};
</script>

<style lang="scss">
.footer {
  padding: 20px 10px !important;
  position: absolute;
  bottom: 0;
  width: 100%;

  p {
    font-size: 14px;

    &:not(:last-child) {
      margin-bottom: 3px !important;
    }
  }
}
</style>
