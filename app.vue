<template>
  <div>
    <header :style="{ backgroundColor: 'rgba(255,255,255,' + opacity + ')' }">
      <img src="~/assets/image/pplus.png" />
    </header>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const opacity = ref(0);
function onscroll() {
  opacity.value = Math.min(window.scrollY / 100, 1);
}
onBeforeMount(() => {
  onscroll();
  window.addEventListener("scroll", onscroll);
});
onBeforeUnmount(() => window.removeEventListener("scroll", onscroll));
</script>

<style lang="scss" scoped>
body {
  div {
    align-self: center;
    max-width: 1920px;
    width: 100%;
    height: 150vh;
    background-image: linear-gradient(to bottom right, green, blue);
    margin: 0 auto;
    header {
      position: sticky;
      top: 0;
      height: 100px;
      img {
        height: 70%;
        margin: 15px;
        margin-left: 55px;
      }
    }
  }
}
</style>

<style lang="scss">
body {
  margin: 0;
  font-family:
    "Wanted Sans Variable",
    "Wanted Sans",
    -apple-system,
    BlinkMacSystemFont,
    system-ui,
    "Segoe UI",
    "Apple SD Gothic Neo",
    "Noto Sans KR",
    "Malgun Gothic",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    sans-serif;
}
</style>
