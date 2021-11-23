<template>
  <router-view />
</template>
<script>
import { core } from "./config/pluginInit";

export default {
  components: {},
  mounted() {
   core.mainIndex();
  }
};
</script>
<style lang="scss">
@import "./assets/scss/style.scss";
</style>
