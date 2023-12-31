<template>
  <div class="flex flex-grow justify-center items-center">
    <div class="card shadow card-bordered w-5/6 sm:w-[30%] h-min">
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
        />
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          class="input input-bordered"
        />
        <button type="submit" class="btn btn-primary">로그인</button>
        <div class="flex grow justify-center gap-4">
          <span class="text-slate-400">아직 회원이 아니신가요?</span>
          <NuxtLink to="register" class="link link-primary">회원가입</NuxtLink>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
