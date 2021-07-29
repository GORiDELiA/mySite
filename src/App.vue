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

  <!-- <h2 v-if="num === 0">The number is zero</h2>
  <h2 v-else-if="num < 0">The number is negative</h2>
  <h2 v-else-if="num > 0">The number is positive</h2>
  <h2 v-else>The number is not number</h2>

  <template v-if="display">
    <h2>Vishwas</h2>
    <h2>Codevolution</h2>
    <h2>Vue</h2>
  </template>

  <h2 v-show="showElement">Using v-show</h2>
  <h2 v-if="showElement">Using v-if</h2> -->

  <!-- <h2 v-for="(name, index) in names" :key="name">{{ index }} {{ name }}</h2>
  <h2 v-for="name in fullNames" :key="name.first">{{ name.first }} {{ name.last }}</h2>
  <div v-for="actor in actors" :key="actor.name">
    <h2>{{actor.name}}</h2>
    <h3 v-for="movie in actor.movies" :key="movie">{{ movie }}</h3>
  </div>
  <h2 v-for="(value, key, index) in myInfo" :key="value">{{ index }} {{ key }} {{ value }}</h2>
  
  <template v-for="name in names" :key="name">
    <h2>{{ name }} </h2>
    <hr />
  </template> -->

  <!-- <template v-for="name in names" :key="name">
    <h2 v-if="name === 'Bruce'">{{ name }}</h2>
  </template>

  <h2>{{ 2 + 4 + 4 }}</h2>
  <h2>Add method - {{ add(2,4,5) }}</h2>
  <h2>Multiply method - {{ multiply(baseValue) }}</h2> -->
  
  <h2>{{name}}</h2>
  <div>
    <button v-on:mouseover="changeName, increment(1, $event)">Change name</button>
  </div>

  <h2>{{count}}</h2>
  <div>
    <button @click="increment(1, $event)">Increment 1</button>
    <button @click="increment(5)">Increment 5</button>
    <button @click="decrement(1)">Decrement 1</button>
    <button @click="decrement(5)">Decrement 5</button>
  </div>
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

      // num: "Hi",
      // display: true,
      // showElement: false,

      // names: ["Bruce", "Clark", "Diana"],
      // fullNames: [
      //   { first: "Bruce", last: "Wayne" },
      //   { first: "Clark", last: "Kent" },
      //   { first: "Princess", last: "Diana" },
      // ],
      // actors: [
      //   {
      //     name: "Christian Bale",
      //     movies: ["Batman", "The Prestige"],
      //   },
      //   {
      //     name: "Di Caprio",
      //     movies: ["Titanic", "Inception"],
      //   },
      // ],
      // myInfo: {
      //   name: "Vishwas",
      //   channel: "Codevolution",
      //   cource: "Vue 3",
      // },
      // baseMultiply: 5,
      // baseValue: 2
      name: "Vishwas",
      count: 0,
    }
  },
  methods: {
    // add(a, b, c) {
    //   return a + b + c
    // },
    // multiply(num) {
    //   return num * this.baseMultiply
    // }
      increment(num, event) {
        this.count += num
        console.log("Event", event)
      },
      decrement(num, event) {
        this.count -= num
        console.log("Event", event)
      },
      changeName(event) {
        this.name = "Batman"
        console.log("Event", event)
      },
  }
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
