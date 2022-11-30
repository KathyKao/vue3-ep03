<script setup>
// Vue3 使用 defineEmits 方法來定義往上回傳的內容
// defineEmits 可以放 Object, Array

// defineEmits Array 寫法
const emit = defineEmits(["AddInt"]);

// // defineEmits Object 寫法
// const emit = defineEmits({
//   // 可以定義一個函式去驗證傳上去的結果對或不對
//   AddInt: (payload) => {
//     if (payload === "Kathy") {
//       return true;
//     } else {
//       // 這邊可以做一個驗證失敗的處理
//       return false;
//     }
//   },
// });
const handleAddClick = () => {
  // emit 回傳一個事件, 發送一個請求往上傳遞
  emit("AddInt", "Robert");
};
</script>
<template>
  <div><button @click="handleAddClick">click</button></div>
</template>
<style></style>
