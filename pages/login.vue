<template>
  <div>
    <form
      method="post"
      action="/api/login"
      @submit.prevent=""
      enctype="multipart/form-data"
    >
      <label for="username">Username</label>
      <input name="username" id="username" /><br />
      <label for="password">Password</label>
      <input type="password" name="password" id="password" /><br />
      <input type="submit" />
    </form>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
