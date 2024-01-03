<template>
  <div>
    <NuxtImg src="/banner.png" class="h-[30vw] md:h-[15vw]" />
    <br />
    <NuxtLink>원장 인사말</NuxtLink>
    <NuxtLink>오시는 길</NuxtLink>
    <NuxtLink>공지사항</NuxtLink>
    <NuxtLink to="tel:0319071526">전화</NuxtLink>
    <NuxtLink to="lectures">동영상 강의</NuxtLink>
    <NuxtLink to="schedule">시간표</NuxtLink>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
img {
  object-fit: cover;
}
</style>
