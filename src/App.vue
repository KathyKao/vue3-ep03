<script setup>
// Vue3 setup 語法糖直接 import 幫我們註冊到 template
// Vue2 需要 components Option API 語法註冊
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import Add from "./components/Add.vue";
import vImg from "./components/vImg.vue";
import Logo from "./assets/logo.svg";
import { computed } from "@vue/reactivity";
import { ref } from "vue";

const callBack = (res) => {
  console.log("callBack=> ", res);
};

// 動態元件（Dynamic-Components）
const isChange = ref(0);
const component = computed(() => {
  // Vue2 動態載入組件可以是字串, 自己抓上面的 import component 去 render 對應,
  // Vue3 透過 import component, return 載入放進去 is
  switch (isChange.value) {
    case 0:
      return vImg;
    case 1:
      return Add;
    case 2:
      return HelloWorld;
    default:
  }
});
const changeComponent = (idx) => {
  isChange.value = idx;
};
</script>

<template>
  <header>
    <button @click="changeComponent(0)">components 1</button>
    <button @click="changeComponent(1)">components 2</button>
    <button @click="changeComponent(2)">components 3</button>
    <!-- <vImg
      alt="Vue logo"
      className="logo"
      :src="Logo"
      width="125"
      height="125"
    ></vImg>
    <Add @AddInt="callBack" />
    <HelloWorld msg="You did it!" /> -->
    <div class="wrapper">
      <component :is="component"></component>
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
