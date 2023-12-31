<template>
  <div class="flex flex-grow justify-center items-center">
    <div class="card shadow card-bordered w-[30%] h-min">
      <form
        class="card-body gap-4"
        method="post"
        action="/api/register"
        @submit.prevent=""
        enctype="multipart/form-data"
      >
        <span class="card-title">회원가입</span>
        <input
          name="userid"
          id="username"
          placeholder="아이디"
          class="input input-bordered"
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="비밀번호"
          class="input input-bordered"
        />
        <input
          type="password"
          name="password"
          id="password-check"
          placeholder="비밀번호 확인"
          class="input input-bordered"
        />
        <input
          name="name"
          id="name"
          placeholder="이름"
          class="input input-bordered"
        />
        <input
          name="fullname"
          id="fullname"
          placeholder="이름+학교+학년 (ex.홍길동백석고2)"
          class="input input-bordered"
        />
        <button class="btn btn-primary" type="submit">회원가입</button>
        <div class="flex grow justify-center gap-4">
          <span class="text-slate-400">이미 회원이신가요?</span>
          <NuxtLink to="login" class="link link-primary">로그인</NuxtLink>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
