<template>
  <div class="flex flex-col items-center w-full sm:w-3/5 mt-3">
    <div class="text-sm breadcrumbs w-full">
      <ul>
        <li>
          <Icon name="heroicons:home" />
        </li>
        <li>
          <NuxtLink to="/lectures">동영상 강의</NuxtLink>
        </li>
        <li>{{ teacher ?? "나의 강의실" }}</li>
      </ul>
    </div>
    <h1
      class="w-full text-4xl font-semibold text-center py-10 bg-no-repeat bg-right-bottom"
      :style="{
        backgroundImage: `url(${hero})`,
      }"
    >
      {{ teacher ?? "나의 강의실" }}
    </h1>
    <div class="flex w-full">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="ts">
import lectures from "assets/data/lectures.json";
import hero from "assets/img/hero.jpg";
const route = useRoute();

const teacher = computed(() => {
  return route.params.lectureid
    ? `${lectures.filter((e) => e.id == useRoute().params.lectureid)[0].name} 선생님`
    : undefined;
});
</script>
