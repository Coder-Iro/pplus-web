<template>
  <div class="mt-3 flex w-full flex-col items-center sm:w-3/5">
    <div class="breadcrumbs ml-3 self-start text-sm">
      <ul>
        <li>
          <NuxtLink to="/"><Icon name="heroicons:home" /></NuxtLink>
        </li>
        <template v-if="teacher">
          <li>
            <NuxtLink to="/lectures">나의 강의실</NuxtLink>
          </li>
          <li>{{ teacher }}</li>
        </template>
        <li v-else>나의 강의실</li>
      </ul>
    </div>
    <h1
      class="w-full bg-right-bottom bg-no-repeat py-10 text-center text-4xl font-semibold"
      :style="{
        backgroundImage: `url(${bgimage})`,
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
const $img = useImage();
const bgimage = $img("/img/titlebg.jpg", { format: "webp" });
const route = useRoute();

const teacher = computed(() => {
  return route.params.lectureid
    ? `${lectures.filter((e) => e.id == useRoute().params.lectureid)[0].name} 선생님`
    : undefined;
});
</script>
