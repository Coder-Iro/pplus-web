<template>
  <div class="flex flex-col items-center">
    <div role="tablist" class="tabs tabs-lifted ml-6 self-start md:ml-4">
      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        class="tab hidden [--tab-bg:rgb(241,245,249)] [--tab-border-color:transparent]"
        aria-label="Tab 1"
      />
      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        class="tab [--tab-bg:rgb(241,245,249)] [--tab-border-color:transparent]"
        aria-label="Tab 1"
      />
      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        class="tab [--tab-bg:rgb(241,245,249)] [--tab-border-color:transparent]"
        aria-label="Tab 2"
        checked
      />
      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        class="tab [--tab-bg:rgb(241,245,249)] [--tab-border-color:transparent]"
        aria-label="Tab 3"
      />
      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        class="tab hidden [--tab-bg:rgb(241,245,249)] [--tab-border-color:transparent]"
        aria-label="Tab 1"
      />
    </div>
    <div class="mx-2 md:mx-0">
      <table class="table table-pin-rows table-sm rounded-t-lg">
        <colgroup>
          <col class="hidden md:table-column" />
          <col class="w-screen" />
        </colgroup>
        <thead>
          <tr class="bg-slate-100">
            <th class="hidden rounded-tl-lg text-center md:table-cell">번호</th>
            <th class="rounded-tl-lg text-center md:rounded-tl-none">제목</th>
            <th class="text-center">글쓴이</th>
            <th class="rounded-tr-lg text-center">날짜</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="inde in 20">
            <td class="hidden md:table-cell">{{ inde }}</td>
            <th>Cy Ganderton</th>
            <td>철쌤</td>
            <td>2023.12.07</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="join my-3">
      <button class="btn join-item">1</button>
      <button class="btn join-item btn-active">2</button>
      <button class="btn join-item">3</button>
      <button class="btn join-item">4</button>
    </div>
  </div>
</template>
