<template>
  
  <!-- <div> {{ greet }} {{ name }} </div>
  <div> {{ channel }} </div>
  
  <div v-html="channel"></div>
  <div v-html="hack"></div>

  <h2 :id="heaingID">Heading</h2>
  <button :disabled="isDisabled">Bind</button><br>
  <h2 class="underline">Underlined Text</h2>

  <h2 class="underline" :class="status">Status</h2>
  <h2 :class="isPromoted && 'promoted'">Promoted Movie</h2>
  <h2 :class="isSoldout ? 'sold-out' : 'new'"> Soldout? movie</h2>
  <h2 :class="['new','promoted']">Newly promoted movie</h2>
  <h2 :class="[isPromoted && 'promoted' , isSoldout ? 'sold-out' : 'new']">Array conditional movie</h2>
  <h2 :class="{
    promoted: isPromoted,
    new: !isSoldout,
    'sold-out': isSoldout
  }">Object conditional movie</h2>
 
  <h2 :style="{
    color: hilightColor,
    fontSize: headerSize + 'px',
    padding: '20px'
  }">Inline style</h2>
  <h2 :style="headerStyleObject">Style Object</h2>

  <div :style="[baseStyleObject, successStyleObject]"> Success Object</div>
  <div :style="[baseStyleObject, dangerStyleObject]"> Danger Object</div> -->

  <h2 v-if="num === 0">The number is zero</h2>
  <h2 v-else-if="num < 0">The number is negative</h2>
  <h2 v-else-if="num > 0">The number is positive</h2>
  <h2 v-else>The number is not number</h2>

  <template v-if="display">
    <h2>Vishwas</h2>
    <h2>Codevolution</h2>
    <h2>Vue</h2>
  </template>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      // greet: "Hello",
      // name: "Vishwas",
      // channel: "<b>Codevolution<b>",
      // hack: `<a href="#" onclick="alert('You have been hacked!')">Win a prize!<a/>`,
      // headingID: "heading",
      // isDisabled: false,
      // status: "success",
      // isPromoted: true,
      // isSoldout: true,
      // hilightColor: "Orange",
      // headerSize: 50,
      // headerStyleObject: {
      //   color: "orange",
      //   fontSize: "50px",
      //   padding: "20px",
      // },
      // baseStyleObject: {
      //   fontSize: "50px",
      //   padding: "10px",
      // },
      // successStyleObject: {
      //   color: "green",
      //   backgroundColor: "lightgreen",
      //   border: "1px solid green",
      //   padding: "20px",
      // },
      // dangerStyleObject: {
      //   color: "darkred",
      //   backgroundColor: "red",
      //   border: "1px solid darkred",
      // },

      num: "Hi",
      display: true,

    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.underline {
  text-decoration: underline;
}

.promoted {
  font-style: italic;
}

.new {
  color: olivedrab;
}

.sold-out {
  color: red;
}
</style>
