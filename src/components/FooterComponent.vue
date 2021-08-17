<template>
  <div class="container">
    <h2>{{ pageTitle }}</h2>
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
  height: 40px;
  background: #5ccebf;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  clear: both;
}

.footer a {
  text-decoration: none;
  color: #2c3e50;
  /* margin: 0 10px; */
  padding: 3px 10px;
  background: #5ccebf;
}
</style>