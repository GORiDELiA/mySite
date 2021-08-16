<template>
  <div id="app">
    <header id="header_a">
      <header-component></header-component>
    </header>
      <!--リンクタグを生成します。-->
      <router-link to="/">top</router-link>
      <router-link to="/page2">about</router-link>
      <router-link to="/page3">contact</router-link>
    <!--上記のリンクタグで設定したコンポーネントが表示される場所です。-->
    <router-view></router-view>
    <footer id="footer_a">
      <footer-component></footer-component>
    </footer>
  </div>
</template>

<!--コンポーネントの名前を定義します。-->
<script>
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
export default {
  components: { HeaderComponent,
                FooterComponent,
  },
  name: 'App'
}
</script>

<!--スタイルの指定をします-->
<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#header {
  height: 40px;
  background: white;
  box-shadow: 0px 3px 3px rgba(0,0,0,0.1);
  display: flex;
  justify-content: center;
  align-items: center;
}

#header_a {
  text-decoration: none;
  color: #2c3e50;
  /* margin: 0 10px; */
  padding: 3px 10px;
  background: #5ccebf;
}

#footer_a {
  text-decoration: none;
  color: #2c3e50;
  /* margin: 0 10px; */
  padding: 3px 10px;
  background: #5ccebf;
}
</style>