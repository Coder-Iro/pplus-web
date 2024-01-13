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
        action="/api/register"
        @submit.prevent=""
        enctype="multipart/form-data"
      >
        <span class="card-title">회원가입</span>
        <input
          name="username"
          id="username"
          placeholder="아이디"
          class="input input-bordered"
          autocomplete="username"
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="비밀번호"
          class="input input-bordered"
          autocomplete="new-password"
        />
        <input
          type="password"
          name="password"
          id="password-check"
          placeholder="비밀번호 확인"
          class="input input-bordered"
          autocomplete="new-password"
        />
        <input
          name="name"
          id="name"
          placeholder="이름"
          class="input input-bordered"
          autocomplete="name"
        />
        <input
          name="fullname"
          id="fullname"
          placeholder="학교+학년 (ex.백석고2)"
          class="input input-bordered"
          autocomplete="organization"
        />
        <button class="btn btn-primary" type="submit">회원가입</button>
        <div class="flex grow flex-wrap justify-center items-center gap-4">
          <span>이미 회원이신가요?</span>
          <NuxtLink to="login" class="link link-primary">로그인</NuxtLink>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import background from "~/assets/img/background3.jpg";
</script>
