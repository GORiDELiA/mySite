<template>
  
  <!-- <div> {{ greet }} {{ name }} </div>
  <div> {{ channel }} </div>
  
  <div v-html="channel"></div>
  <div v-html="hack"></div>

  <h2 :id="headingID">Heading</h2>
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
  
  <!-- <h2>{{name}}</h2>
  <div>
    <button v-on:mouseover="changeName, increment(1, $event)">Change name</button>
  </div>

  <h2>{{count}}</h2>
  <div>
    <button @click="increment(1, $event)">Increment 1</button>
    <button @click="increment(5)">Increment 5</button>
    <button @click="decrement(1)">Decrement 1</button>
    <button @click="decrement(5)">Decrement 5</button>
  </div> -->
  <!-- <div>
    <pre>
      {{ JSON.stringify(formValues, null ,2) }}
    </pre>
  </div>
  <form @submit.prevent="submitForm">
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" v-model.trim.lazy="formValues.name" />
    </div>

    <div>
      <label for="profile">Profile Summary</label>
      <textarea id="profile" v-model="formValues.profileSummary" /> 
    </div>

    <div>
      <label for="country">Country</label>
      <select id="country" v-model="formValues.country">
        <option value="">Select a country</option>
        <option value="india">India</option>
        <option value="vietnam">Vietnam</option>
        <option value="singapore">Singapore</option>
      </select>
    </div>

    <div>
      <label for="job-location">Job Location</label>
      <select id="job-location" multiple v-model="formValues.jobLocation">
        <option value="india">India</option>
        <option value="vietnam">Vietnam</option>
        <option value="singapore">Singapore</option>
      </select>
    </div>

    <div>
      <input 
        type="checkbox"
        id="remoteWork" 
        v-model="formValues.remoteWork" 
        true-value="yes" 
        false-value="no"
      />
      <label for="remoteWork">Open to remote work?</label>
    </div>

    <div>
      <label for="skillSet">Skill set</label>
      <input type="checkbox" id="html" value="html" v-model="formValues.skillSet"/>
      <label for="html">html</label>
      <input type="checkbox" id="css" value="css" v-model="formValues.skillSet"/>
      <label for="css">css</label>
      <input type="checkbox" id="javascript" value="javascript" v-model="formValues.skillSet"/>
      <label for="javascript">javascript</label>
    </div>
    -->
    <!-- <div>
      <label for=""> Years of Experience</label>
      <input 
        type="radio"
        id="0-2"
        value="0-2"
        v-model="formValues.yearsOfExperience"
      />
      <label for="0-2">0-2</label>
      <input 
        type="radio"
        id="3-4"
        value="3-4"
        v-model="formValues.yearsOfExperience"
      />
      <label for="3-4">3-4</label>
      <input 
        type="radio"
        id="6-10"
        value="6-10"
        v-model="formValues.yearsOfExperience"
      />
      <label for="6-10">6-10</label>
      <input 
        type="radio"
        id="10+"
        value="10+"
        v-model="formValues.yearsOfExperience"
      />
      <label for="10+">10+</label>
    </div> -->
    <!--
    <div>
      <label for="age">Age</label>
      <input @keyup.enter="submitForm" type="number" id="age" v-model.number="formValues.age" />
    </div> -->

    <!-- <div>
      <button type="submit">Submit</button>
    </div> -->
  <!-- </form> -->

  <!-- v-once：レンダーを１回のみ行う -->
  <h2 v-once>{{name}}</h2>
  <button @click="name='Batman'">Change name</button>
  <!-- v-pre：コンパイルをスキップ -->
  <h2 v-pre>{{name}}</h2>

  <h2>Fullname - {{ firstName}} {{lastName}} </h2>
  <h2>Fullname - {{ fullName }} </h2>
  <h2>Total - {{ items.reduce((total, curr) => (total = total + curr.price), 0) }} </h2>
  <button @click="items.push({id: 4, title: 'Keyboard', price: 50})">Add item</button>
  <h2>Computed Total - {{ total }}</h2>
  <h2>Method Total - {{ getTotal() }}</h2>
  <input type="text" v-model="country" style="margin: 0 auto;">
  
  <template v-for="item in items" :key="item.id">
    <h2 v-if="item.price > 100">{{item.title}}  {{item.price}}</h2>
  </template>

  <h2 v-for="item in expensiveItems" :key="item.id">
    {{ item.title }} {{ item.price }}
  </h2>

  <h2>Volume Tracker (0-20)</h2>
  <h3>Current Volume - {{ volume }}</h3>
  <div>
    <button @click="volume += 2" >Increase</button>
    <button @click="volume -= 2" >Decrease</button>
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
      // name: "Vishwas",
      // count: 0,
      formValues: {
        name: '',
        profileSummary: '',
        country: '',
        jobLocation: [],
        remoteWork: "no",
        skillSet: [],
        yearsOfExperience: "",
        age: null,
      },
      name: "Vishwas",
      firstName: 'Bruce',
      lastName: 'Wayne',
      items: [
        {
          id: 1,
          title: "TV",
          price: 100,
        },
        {
          id: 2,
          title: "Phoen",
          price: 200,
        },
        {
          id: 3,
          title: "Laptop",
          price: 300,
        },
      ],
      country: '',
      volume: 0,

    }
  },
  methods: {
    // add(a, b, c) {
    //   return a + b + c
    // },
    // multiply(num) {
    //   return num * this.baseMultiply
    // }
    // increment(num, event) {
    //   this.count += num
    //   console.log("Event", event)
    // },
    // decrement(num, event) {
    //   this.count -= num
    //   console.log("Event", event)
    // },
    // changeName(event) {
    //   this.name = "Batman"
    //   console.log("Event", event)
    // },
    submitForm() {
      console.log('Form values', this,this.formValues)
    },
    getTotal() {
      console.log("getTotal Methyod")
      return this.items.reduce((total, curr) => (total = total + curr.price), 0) 
    }
  },
  computed: {
    fullName() {
      // return `${this.firstName} ${this.lastName}`
      return this.firstName + " "+this.lastName
    },
    total() {
      return this.items.reduce((total, curr) => (total = total + curr.price), 0) 
    },
    expensiveItems() {
      return this.items.filter( item => item.price > 100)
    },
  },
  watch: {
    volume(newValue, oldValue) {
      if(newValue > oldValue && newValue === 16) {
        alert('Listening to a high volume for a long time may damage your hearing')
      }
    },
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

label {
  font-weight: bold;
  display: flex;
  margin-bottom: 5px;
}
input + label {
  font-weight: bold;
  display: inline-flex;
  margin-right: 20px;
}
input[type='text'],
textarea,
select {
  display: block;
  width: 400px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
