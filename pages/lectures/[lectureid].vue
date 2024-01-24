<template>
  <div class="flex flex-col items-center">
    <div role="tablist" class="tabs tabs-lifted self-start ml-4">
      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        class="tab [--tab-bg:rgb(241,245,249)] [--tab-border-color:transparent] hidden"
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
        class="tab [--tab-bg:rgb(241,245,249)] [--tab-border-color:transparent] hidden"
        aria-label="Tab 1"
      />
    </div>
    <table class="table table-sm table-pin-rows rounded-t-lg">
      <colgroup>
        <col class="hidden md:table-column" />
        <col class="w-screen" />
      </colgroup>
      <thead>
        <tr class="bg-slate-100">
          <th class="text-center hidden md:table-cell rounded-tl-lg">번호</th>
          <th class="text-center">제목</th>
          <th class="text-center">글쓴이</th>
          <th class="text-center rounded-tr-lg">날짜</th>
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
    <div class="join my-3">
      <button class="join-item btn">1</button>
      <button class="join-item btn btn-active">2</button>
      <button class="join-item btn">3</button>
      <button class="join-item btn">4</button>
    </div>
  </div>
</template>
