<template>
  <div class="container">

    <div class="menu">
      <router-link to="/top">     Top      </router-link>
      <router-link to="/about">   About    </router-link>
      <router-link to="/catalog"> Catalog  </router-link>
      <router-link to="/singin">  Sing in  </router-link>
      <router-link to="/singup">  Sing up  </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageTitle: "Header",
    };
  },
};
</script>

<style scoped>

.container {
  height: 40px;
  width: 100%;
  background: #5ccebf;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
}
/* .menu {
  justify-content: center;
} */
.menu a {
    text-decoration: none;
    margin: 10px;
}

.title {
  float: left;
}

</style>