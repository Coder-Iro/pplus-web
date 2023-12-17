<template>
  <div>
    <form
      method="post"
      action="/api/login"
      @submit.prevent=""
      enctype="multipart/form-data"
    >
      <label for="userid">아이디</label>
      <input name="userid" id="username" /><br />
      <label for="password">비밀번호</label>
      <input type="password" name="password" id="password" /><br />
      <label for="password">비밀번호 확인</label>
      <input type="password" name="password" id="password" /><br />
      <label for="name">이름</label>
      <input name="name" id="name" /><br />
      <label for="fullname">이름+학교+학년 (ex.홍길동백석고2)</label>
      <input name="fullname" id="fullname" /><br />
      <input type="submit" />
    </form>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
