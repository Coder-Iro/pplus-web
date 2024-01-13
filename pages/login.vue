<template>
  <div
    class="flex w-screen justify-center items-center bg-left-bottom bg-no-repeat bg-cover"
    :style="{
      backgroundImage: `url(${background})`,
    }"
  >
    <div class="card glass shadow-2xl w-11/12 md:w-1/2 xl:w-[30%] h-min">
      <form
        class="card-body gap-4"
        method="post"
        action="/api/login"
        @submit.prevent=""
        enctype="multipart/form-data"
      >
        <span class="card-title">로그인</span>
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
        <div class="flex grow flex-wrap justify-center items-center gap-4">
          <span class="">아직 회원이 아니신가요?</span>
          <NuxtLink to="register" class="link link-primary">회원가입</NuxtLink>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import background from "~/assets/img/background3.jpg";
</script>
