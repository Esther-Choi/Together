<script>
  import Navbar from "./components/Navbar.svelte";
  import MyPage from "./components/MyPage.svelte";
  import Calendar from "./components/Calendar.svelte";
  import Board from "./components/Board.svelte";
  import Chart from "./components/Chart.svelte";
  import Login from "./components/Login.svelte";

  import CalendarModal from "./modals/CalendarModal.svelte";
  import SelectProjectModal from "./modals/SelectProjectModal.svelte";
  import {
    isCalendarAddModal,
    isProjectSelectModal,
    pageType,
    isLogin,
  } from "./store.js";
  function toggleModal() {
    $isCalendarAddModal = !$isCalendarAddModal;
  }
</script>

<!-- <Auth /> -->
<Navbar />
{#if $isLogin == "true"}
  {#if $pageType == "mypage"}
    <MyPage />
  {:else if $pageType == "calendar"}
    <Calendar />
  {:else if $pageType == "board"}
    <Board />
  {:else if $pageType == "chart"}
    <Chart />
  {/if}
  {#if $isCalendarAddModal.open}
    <CalendarModal />
  {/if}
  {#if $isProjectSelectModal}
    <SelectProjectModal />
  {/if}
{:else}
  <Login />
{/if}
