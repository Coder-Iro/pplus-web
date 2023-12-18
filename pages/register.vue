<template>
  <div>
    <form
      method="post"
      action="/api/login"
      @submit.prevent=""
      enctype="multipart/form-data"
    >
      <input name="userid" id="username" placeholder="아이디" />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="비밀번호"
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="비밀번호 확인"
      />
      <input name="name" id="name" placeholder="이름" />
      <input
        name="fullname"
        id="fullname"
        placeholder="이름+학교+학년 (ex.홍길동백석고2)"
      />
      <input type="submit" value="회원가입" />
    </form>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
div {
  width: 25%;
  margin: 0 auto;
  input {
    box-sizing: border-box;
    width: 100%;
  }
}
</style>
