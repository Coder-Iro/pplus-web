<template>
  <div class="flex flex-col w-full h-dvh">
    <header class="navbar shadow">
      <div class="navbar-start grow w-auto">
        <NuxtLink to="/">
          <NuxtImg
            src="/pplus_text_new.png"
            alt="피플어스과학학원"
            format="webp"
            height="144px"
            class="object-contain"
            style="height: 48px"
          />
        </NuxtLink>
      </div>
      <div class="navbar-end w-auto flex grow-0 shrink-0 gap-0 sm:gap-2 ml-3">
        <NuxtLink class="btn btn-primary" to="/login">로그인</NuxtLink>
        <NuxtLink class="btn btn-primary hidden sm:inline-flex" to="/register"
          >회원가입</NuxtLink
        >
      </div>
    </header>
    <div class="flex grow justify-center items-stretch">
      <NuxtPage />
    </div>
    <div class="bg-slate-500 min-h-6"></div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: "피플어스과학학원" });
</script>

<style>
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
