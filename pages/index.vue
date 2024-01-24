<template>
  <div class="w-screen h-full flex flex-col">
    <NuxtImg
      src="/banner.png"
      format="webp"
      class="h-[30vw] md:h-[20vw] w-full object-cover object-center"
      alt="메인배너"
    />
    <div
      class="grow flex portrait:items-center landscape:items-start justify-center"
    >
      <div
        class="h-min portrait:w-full landscape:w-full landscape:lg:w-2/3 portrait:md:w-3/4 portrait:md:gap-12 grow-0 inline-grid portrait:grid-cols-2 landscape:grid-cols-4 justify-items-stretch items-start p-10 gap-4"
      >
        <NuxtLink to="/lectures" custom v-slot="{ navigate }">
          <div
            @click="navigate"
            v-for="text in ['공지사항', '시간표', '동영상 강의', '전화']"
            class="border-dotted glass border-black border-2 rounded-2xl aspect-square text-center align-middle leading-10 cursor-pointer"
          >
            {{ text }}
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
