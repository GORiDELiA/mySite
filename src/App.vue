<template>
  <div id="app">
    <header>
      <header-component></header-component>
    </header>

    <router-view></router-view>

    <footer>
      <footer-component></footer-component>
    </footer>
  </div>
</template>

<!--コンポーネントの名前を定義します。-->
<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  components: { HeaderComponent, FooterComponent },
  name: "App",
};
</script>

<!--スタイルの指定をします-->
<style>
body {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* width: 960px;
  margin:auto; */
}

</style>