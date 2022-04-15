<script>
  import Navbar from "./components/Navbar.svelte";
  import MyPage from "./components/MyPage.svelte";
  import Calendar from "./components/Calendar.svelte";
  import Board from "./components/Board.svelte";

  import CalendarModal from "./modals/CalendarModal.svelte";
  import SelectProjectModal from "./modals/SelectProjectModal.svelte";
  import {
    isCalendarAddModal,
    isProjectSelectModal,
    pageType,
  } from "./store.js";
  function toggleModal() {
    $isCalendarAddModal = !$isCalendarAddModal;
  }
</script>

<!-- <Auth /> -->
<Navbar />
{#if $pageType == "mypage"}
  <MyPage />
{:else if $pageType == "calendar"}
  <Calendar />
{:else if $pageType == "board"}
  <Board />
{/if}
{#if $isCalendarAddModal}
  <CalendarModal />
{/if}
{#if $isProjectSelectModal}
  <SelectProjectModal />
{/if}
