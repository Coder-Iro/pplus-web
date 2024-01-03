<template>
  <div class="flex flex-col w-full h-dvh">
    <header class="navbar shadow backdrop-blur-2xl">
      <div class="navbar-start w-4/6">
        <NuxtLink to="/">
          <NuxtImg
            src="/pplus_text.png"
            alt="피플어스과학학원"
            format="webp"
            height="48px"
            style="height: 48px"
          />
        </NuxtLink>
      </div>
      <div class="navbar-end flex gap-2">
        <NuxtLink class="btn btn-primary" to="login">로그인</NuxtLink>
        <NuxtLink class="btn btn-primary hidden sm:inline-flex" to="register"
          >회원가입</NuxtLink
        >
      </div>
    </header>
    <div class="flex basis-full">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: "피플어스과학학원" });
</script>

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
