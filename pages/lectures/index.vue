<template>
  <div class="grow basis-full flex flex-col gap-4 my-4">
    <NuxtLink
      v-for="lecture in lectures"
      :to="`/lectures/${lecture.id}`"
      custom
      v-slot="{ navigate }"
    >
      <div
        @click="navigate"
        class="card card-compact lg:card-normal cursor-pointer glass mx-4 bg-green-50"
      >
        <div class="card-body flex-col lg:flex-row">
          <div
            class="flex flex-row-reverse lg:flex-col lg:grow justify-center gap-4 lg:gap-0 items-center lg:items-start h-full"
          >
            <h3
              class="text-xl lg:text-lg text-center h-min break-words break-keep"
            >
              {{ `${lecture.name} 선생님` }}
            </h3>
            <h2
              class="text-2xl font-semibold lg:font-normal lg:text-3xl text-center h-min break-words break-keep"
            >
              {{ lecture.lectures[3] }}
            </h2>
            <p class="grow-0 hidden lg:block">최근 수강일 2023. 02. 06.</p>
          </div>
          <div class="divider my-0 flex lg:hidden"></div>
          <div class="flex flex-col w-full lg:w-fit items-end justify-around">
            <p class="self-center hidden lg:block">최근 본 강좌 바로가기</p>
            <div class="divider my-0 hidden lg:flex"></div>
            <a class="btn btn-sm glass w-full break-words break-keep"
              >화학의 기초 4. 화학 결합과 물질의 분류</a
            >
            <a class="btn btn-sm glass w-full break-words break-keep"
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
