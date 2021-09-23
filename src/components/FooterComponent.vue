<template>
  <div class="container">
    <h1>{{ pageTitle }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageTitle: "Footer",
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  border-top: solid 2px rgba(0,0,0,.1);
}

</style>