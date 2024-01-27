<template>
  <div class="flex h-dvh w-full flex-col">
    <header class="navbar z-10 shadow">
      <div class="navbar-start w-auto grow">
        <NuxtLink to="/">
          <NuxtImg
            src="/img/logo.png"
            alt="피플어스과학학원"
            width="462px"
            height="96px"
            format="webp"
            class="h-12 w-auto object-contain"
          />
        </NuxtLink>
      </div>
      <div class="navbar-end ml-1 flex w-auto shrink-0 grow-0 gap-2">
        <NuxtLink class="btn btn-primary" to="/login">로그인</NuxtLink>
        <NuxtLink class="btn btn-primary hidden sm:inline-flex" to="/register"
          >회원가입</NuxtLink
        >
      </div>
    </header>
    <div class="flex grow items-stretch justify-center">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
