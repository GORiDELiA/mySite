<template>
  <div class="container">
    <div v-for="item in items" :key="item.name">
      <div class="item_box">
        <img :src="item.image" />
        {{ item.name }}
        {{ item.price }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: "Unity Chan 0",
          price: 1000,
          description: "Unity Chan free image",
          image: require("@/assets/img/img1.png"),
        },
        {
          name: "Unity Chan 1",
          price: 1000,
          description: "Unity Chan free image",
          image: require("@/assets/img/img1.png"),
        },
        {
          name: "Unity Chan 2",
          price: 1000,
          description: "Unity Chan free image",
          image: require("@/assets/img/img1.png"),
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  clear: both;
}

.item_box {
  float: left;
  margin: 10px;
  object-fit: contain;
}

.item_box img {
  width: 150px;
  height: 150px;
  object-fit: contain;
  display: block;
}
</style>