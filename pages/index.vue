<template>
  <img />
  <br />
  <NuxtLink>원장 인사말</NuxtLink><br />
  <NuxtLink>오시는 길</NuxtLink><br />
  <NuxtLink>공지사항</NuxtLink><br />
  <NuxtLink to="tel:0319071526">전화</NuxtLink><br />
  <div>
    <NuxtLink to="lectures">동영상 강의</NuxtLink><br />
    <NuxtLink to="schedule">시간표</NuxtLink>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "피플어스과학학원",
});
</script>

<style lang="scss" scoped>
img {
  content: linear-gradient(to right bottom, green, aqua);
  width: 100%;
  height: calc(75vh - 90px);
}
</style>
