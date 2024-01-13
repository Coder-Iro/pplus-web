<template>
  <div class="flex flex-col items-center w-full md:w-3/5 mt-3">
    <div class="text-sm breadcrumbs w-full">
      <ul>
        <li>
          <NuxtLink>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="16"
              height="16"
              viewBox="0 0 50 50"
            >
              <path
                d="M 24.962891 1.0546875 A 1.0001 1.0001 0 0 0 24.384766 1.2636719 L 1.3847656 19.210938 A 1.0005659 1.0005659 0 0 0 2.6152344 20.789062 L 4 19.708984 L 4 46 A 1.0001 1.0001 0 0 0 5 47 L 18.832031 47 A 1.0001 1.0001 0 0 0 19.158203 47 L 30.832031 47 A 1.0001 1.0001 0 0 0 31.158203 47 L 45 47 A 1.0001 1.0001 0 0 0 46 46 L 46 19.708984 L 47.384766 20.789062 A 1.0005657 1.0005657 0 1 0 48.615234 19.210938 L 41 13.269531 L 41 6 L 35 6 L 35 8.5859375 L 25.615234 1.2636719 A 1.0001 1.0001 0 0 0 24.962891 1.0546875 z M 25 3.3222656 L 44 18.148438 L 44 45 L 32 45 L 32 26 L 18 26 L 18 45 L 6 45 L 6 18.148438 L 25 3.3222656 z M 37 8 L 39 8 L 39 11.708984 L 37 10.146484 L 37 8 z M 20 28 L 30 28 L 30 45 L 20 45 L 20 28 z"
              ></path>
            </svg>
          </NuxtLink>
        </li>
        <li>
          <a> 공지사항 </a>
        </li>
        <li>
          <span class="inline-flex gap-2 items-center"> Add Document </span>
        </li>
      </ul>
    </div>
    <div
      class="w-full text-3xl text-center py-10 font-semibold bg-no-repeat bg-right-bottom"
      :style="{
        backgroundImage: `url(${hero})`,
      }"
    >
      공지사항
    </div>
    <div class="flex hidden md:block">
      <div class="pr-5" style="float: left; width: 212px; height: 100%">
        <!-- ���̵�� ���� �׺���̼� �޴�-->
        <div id="side_cssmenu" style="border-right: 1px solid #f6f6f6">
          <div
            style="
              background-color: #00aeef;
              width: 190px;
              height: 80px;
              color: #ffffff;
            "
          >
            <div style="padding-top: 17px; text-align: center">
              <ul>
                <li></li>
                <li></li>
                <li>
                  <a href="https://p-plus.ac/page_CDuz96" style="color: #ffffff"
                    >이종민 선생님</a
                  >
                </li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>

        <!-- class�� lnb ������ ĭ���� / ���� </div> �Ѱ� ����� side_cssmenu �� ���鼭 �������� �޴� ������ ( ���� �ľ� ) -->
        <nav class="lnb">
          <h1><a href="https://p-plus.ac/page_pLtv36"></a></h1>
          <ul>
            <li><a href="https://p-plus.ac/page_pLtv36">동영상강의</a></li>
            <li><a href="https://p-plus.ac/page_AOId53">송인철 선생님</a></li>
            <li class="active has-sub">
              <a href="https://p-plus.ac/page_CDuz96">이종민 선생님</a>
              <ul>
                <li><a href="https://p-plus.ac/board_ziaS10">통합과학</a></li>
                <li><a href="https://p-plus.ac/board_Fzgm89">고2 생명Ⅰ</a></li>
                <li class="active">
                  <a href="https://p-plus.ac/board_gWdf98">고3 생명Ⅰ</a>
                </li>
                <li>
                  <a href="https://p-plus.ac/board_spia33">고2 지구과학Ⅰ</a>
                </li>
                <li>
                  <a href="https://p-plus.ac/board_ATif47">고3 지구과학Ⅰ</a>
                </li>
                <li><a href="https://p-plus.ac/board_NPJI58">생명 논술</a></li>
              </ul>
            </li>
            <li><a href="https://p-plus.ac/page_BMnT83">김동엽 선생님</a></li>
            <li><a href="https://p-plus.ac/page_ZvoB59">배근화 선생님</a></li>
          </ul>
        </nav>
        <!-- // ���̵�� ���� �׺���̼� �޴� ����-->
      </div>
      <table class="table table-sm table-pin-rows">
        <colgroup>
          <col />
          <col class="w-screen" />
        </colgroup>
        <thead>
          <tr class="bg-slate-100">
            <th class="text-center">번호</th>
            <th class="text-center">제목</th>
            <th class="text-center">글쓴이</th>
            <th class="text-center">날짜</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="index in 20">
            <td>{{ index }}</td>
            <th>Cy Ganderton</th>
            <td>철쌤</td>
            <td>2023.12.07</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="join my-3">
      <button class="join-item btn">1</button>
      <button class="join-item btn btn-active">2</button>
      <button class="join-item btn">3</button>
      <button class="join-item btn">4</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import hero from "~/assets/img/heo.jpg";
</script>

<style></style>
