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
        action="/api/register"
        @submit.prevent="
          (e) => console.log((e.target as HTMLFormElement).elements)
        "
        enctype="multipart/form-data"
      >
        <span class="card-title text-2xl">회원가입</span>
        <input
          name="id"
          placeholder="아이디"
          class="input input-bordered"
          autocomplete="username"
          v-model="id"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          class="input input-bordered"
          autocomplete="new-password"
        />
        <input
          type="password"
          name="password-confirm"
          placeholder="비밀번호 확인"
          class="input input-bordered"
          autocomplete="new-password"
        />
        <input
          name="name"
          placeholder="이름"
          class="input input-bordered"
          autocomplete="name"
        />
        <input
          name="fullname"
          placeholder="학교+학년 (ex.백석고2)"
          class="input input-bordered"
          autocomplete="organization"
        />
        <button class="btn btn-primary" type="submit">회원가입</button>
        <div class="flex grow flex-wrap items-center justify-center gap-4">
          <span>이미 회원이신가요?</span>
          <NuxtLink to="login" class="link link-primary">로그인</NuxtLink>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
const img = useImage();
const bgimage = img("/img/authbg.jpg", { format: "webp" });

const id = ref("");
var rebounder: NodeJS.Timeout;

watch(id, async () => {
  clearTimeout(rebounder);
  rebounder = setTimeout(() => {
    console.log(id.value);
  }, 3000);
});
</script>

<style scoped></style>
