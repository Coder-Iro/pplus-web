<template>
  <div class="flex flex-col w-screen h-screen justify-center">
    <header class="navbar shadow fixed top-0 bg-white">
      <NuxtLink class="navbar-start" to="/">
        <NuxtImg
          src="/pplus_text.png"
          alt="피플어스과학학원"
          format="webp"
          width="150px"
        />
      </NuxtLink>
      <NuxtLink to="login">로그인</NuxtLink>
      <NuxtLink to="register">회원가입</NuxtLink>
    </header>
    <div class="flex flex-grow">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

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
