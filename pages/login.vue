<template>
  <div
    class="flex w-screen items-center justify-center bg-cover bg-left-bottom bg-no-repeat"
    :style="{
      backgroundImage: `url(${bgimage})`,
    }"
  >
    <div class="card glass h-min w-11/12 shadow-2xl md:w-1/2 xl:w-[30%]">
      <form
        class="card-body gap-4"
        method="post"
        action="/api/login"
        @submit.prevent=""
        enctype="multipart/form-data"
      >
        <span class="card-title text-2xl">로그인</span>
        <input
          name="username"
          placeholder="아이디"
          class="input input-bordered"
          autocomplete="username"
        />
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          class="input input-bordered"
          autocomplete="current-password"
        />
        <button type="submit" class="btn btn-primary">로그인</button>
        <div class="flex grow flex-wrap items-center justify-center gap-4">
          <span class="">아직 회원이 아니신가요?</span>
          <NuxtLink to="register" class="link link-primary">회원가입</NuxtLink>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
const img = useImage();
const bgimage = img("/img/authbg.jpg", { format: "webp" });
</script>

<style scoped></style>
