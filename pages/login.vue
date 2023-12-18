<template>
  <div class="card shadow card-bordered w-[30%] h-min m-auto">
    <form
      class="card-body"
      method="post"
      action="/api/login"
      @submit.prevent=""
      enctype="multipart/form-data"
    >
      <div class="card-title">로그인</div>
      <input
        name="username"
        placeholder="아이디"
        class="input input-bordered my-1"
      />
      <input
        type="password"
        name="password"
        placeholder="비밀번호"
        class="input input-bordered my-1"
      />
      <input type="submit" value="로그인" class="btn btn-primary my-1" />
      <div class="flex grow justify-center gap-4">
        <span class="text-slate-400">아직 회원이 아니신가요?</span>
        <NuxtLink to="register" class="link link-primary">회원가입</NuxtLink>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup></script>
