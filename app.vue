<template>
  <div>
    <header>
      <NuxtLink to="/">
        <NuxtImg src="/pplus_text.png" alt="피플어스과학학원" format="webp" />
      </NuxtLink>
      <div>
        <NuxtLink to="login">로그인</NuxtLink>
        <NuxtLink to="register">회원가입</NuxtLink>
      </div>
    </header>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
html {
  overflow: none;
}
</style>

<style lang="scss" scoped>
body {
  overflow: none;
  overscroll-behavior-y: none;
  div {
    align-self: center;
    width: 100%;
    margin: 0 auto;
    header {
      position: relative;
      top: 0;
      height: 90px;
      width: 100%;
      img {
        height: 70px;
        margin: 10px;
        margin-left: 40px;
      }
      div {
        height: 100%;
        float: right;
        width: auto;
        align-items: center;
        border: 3px solid green;
        border-radius: 15px;
        box-shadow: 5px 5px 5px;
        a {
          margin-left: 5px;
        }
        &:hover {
          box-shadow: 5px 5px 5px inset;
        }
      }
    }
  }
}
</style>

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
