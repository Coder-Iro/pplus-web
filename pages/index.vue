<template>
  <div class="flex h-full w-screen flex-col">
    <swiper-container
      class="h-[30vw] w-full object-cover object-center md:h-[20vw]"
      navigation="true"
      pagination="true"
      loop="true"
      autoplay
    >
      <swiper-slide>
        <NuxtImg
          class="h-[30vw] w-full object-cover object-center md:h-[20vw]"
          src="/img/banner/p1.jpg"
          format="webp"
          alt="메인배너1"
        />
      </swiper-slide>
      <swiper-slide>
        <NuxtImg
          class="h-[30vw] w-full object-cover object-center md:h-[20vw]"
          src="/img/banner/p2.jpg"
          format="webp"
          alt="메인배너2"
          loading="lazy"
        />
      </swiper-slide>
      <swiper-slide>
        <NuxtImg
          class="h-[30vw] w-full object-cover object-center md:h-[20vw]"
          src="/img/banner/p3.jpg"
          format="webp"
          alt="메인배너3"
          loading="lazy"
        />
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "피플어스과학학원",
});
</script>

<script lang="ts">
import { register } from "swiper/element/bundle";

register();
</script>

<style scoped></style>
