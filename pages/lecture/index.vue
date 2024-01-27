<template>
  <div class="my-4 flex grow basis-full flex-col gap-4">
    <NuxtLink
      v-for="lecture in lectures"
      :to="`/lecture/${lecture.id}`"
      custom
      v-slot="{ navigate }"
    >
      <div
        @click="navigate"
        class="card glass card-compact mx-4 cursor-pointer bg-green-50 lg:card-normal md:mx-0"
      >
        <div class="card-body flex-col lg:flex-row">
          <div
            class="flex h-full flex-row-reverse items-center justify-center gap-4 lg:grow lg:flex-col lg:items-start lg:gap-0"
          >
            <h3
              class="h-min break-words break-keep text-center text-xl lg:text-lg"
            >
              {{ `${lecture.name} 선생님` }}
            </h3>
            <h2
              class="h-min break-words break-keep text-center text-2xl font-semibold lg:text-3xl lg:font-normal"
            >
              {{ lecture.lectures[3] }}
            </h2>
            <p class="hidden grow-0 lg:block">최근 수강일 2023. 02. 06.</p>
          </div>
          <div class="divider my-0 flex lg:hidden">최근 본 강좌 바로가기</div>
          <div class="flex w-full flex-col items-end justify-around lg:w-fit">
            <p class="hidden self-center lg:block">최근 본 강좌 바로가기</p>
            <div class="divider my-0 hidden h-2 lg:flex"></div>
            <a
              class="btn btn-outline btn-success btn-sm mb-2 mt-1 w-full break-words break-keep"
              >화학의 기초 4. 화학 결합과 물질의 분류</a
            >
            <a
              class="btn btn-outline btn-success btn-sm w-full break-words break-keep"
              >화학의 기초 5. 이온 결합의 원리</a
            >
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import lectures from "assets/data/lectures.json";
</script>

<style></style>
