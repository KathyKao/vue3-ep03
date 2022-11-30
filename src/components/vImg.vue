<script setup>
// Vue3 使用 defineProps 方法來處理 props 定義的內容
// defineProps 可以放 Object, Array
// Vue2 使用 props Option API
//const props = defineProps(["alt", "className", "src", "width", "height"]);
const props = defineProps({
  alt: {
    tyep: String,
    default: "IMG alt",
  },
  className: {
    tyep: String,
    default: "icon",
  },
  width: {
    tyep: String,
    default: "125",
  },
  height: {
    tyep: String,
    default: "125",
  },
  src: {
    tyep: String,
    default: "",
  },
  //   bool: {
  //     tyep: Boolean,
  //     default: false,
  //   },
  //   object: {
  //     tyep: Object,
  //     default: () => ({}),
  //     // Vue 官網建議用一個函式回傳定義乾淨的 Object
  //     // 寫法用到 ES6 語法糖
  //     // () => {
  //     //   return {};
  //     // };
  //     // 簡寫成
  //     // () => ({});
  //   },
  //   ary: {
  //     tyep: Array,
  //     // Vue 官網建議用一個函式回傳定義乾淨的 Array
  //     default: () => [],
  //   },
  //   testFun: {
  //     type: Function,
  //     default: () => {},
  //   },
});
</script>
<template>
  <img
    :class="props.className"
    :src="props.src"
    :alt="props.alt"
    :width="props.width"
    :height="props.height"
  />
</template>
<style></style>
