<template>
  <div id="app">
    <div class="container">
      <search-box></search-box>
      <result-list></result-list>
    </div>
    <copy-right></copy-right>
  </div>
</template>

<script>
import SearchBox from "./components/SearchBox.vue";
import ResultList from "./components/ResultList.vue";
import CopyRight from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    SearchBox,
    ResultList,
    CopyRight
  }
};
</script>

<style>
html,
body {
  height: 100%;
}

#app {
  min-height: 100%;
  position: relative;
}
</style>
