<template>
  <div class="container">
    <h1 class="title">Title</h1>
    <ul class="menu">
      <li class="menu-item"><router-link to="/top">     Top      </router-link></li>
      <li class="menu-item"><router-link to="/about">   About    </router-link></li>
      <li class="menu-item"><router-link to="/catalog"> Catalog  </router-link></li>
      <li class="menu-item"><router-link to="/singin">  Sing in  </router-link></li>
      <li class="menu-item"><router-link to="/singup">  Sing up  </router-link></li>
    </ul>
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  width: 100%;
  background: #5ccebf;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.1);
}

.title {
  margin-left: 20px;
  font-size: 25px;
  background: black;
}
.menu {
  display: flex;
  list-style: none;
}
.menu-item {
  margin-right: 20px;
}
.menu a {
  text-decoration: none;
}

</style>