<script>
  import { faCalendar, faClock } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "fontawesome-svelte";
  import { isCalendarAddModal, clickedDate } from "../store.js";
  import SveltyPicker from "svelty-picker";

  //   let startDate = $clickedDate.dateStr;
  //   let endDate = $clickedDate.dateStr;
  //   let startTime =
  //     $clickedDate.dateStr.substr(11, 5) == ""
  //       ? "13:00"
  //       : $clickedDate.dateStr.substr(11, 5);
  //   let endTime = startTime == "13:00" ? "14:00" : startTime;
  let startDate = "";
  let endDate = "";
  let startTime = "";
  let endTime = "";
  let isAllDay = false;

  function toggleModal() {
    $isCalendarAddModal = !$isCalendarAddModal;
  }
</script>

<div id="schedule-container">
  <div style="padding: 0 2rem;">
    <input class="title-input" type="text" placeholder="일정 제목" />
  </div>
  <div
    style="overflow-y: scroll;height: 380px;margin-bottom: 1rem; padding: 0 2rem;"
  >
    <div class="input-div">
      <span>기간</span>
      <div class="date-div">
        <SveltyPicker
          inputClasses="form-control"
          format="yyyy-mm-dd"
          bind:value={startDate}
        /><i><FontAwesomeIcon icon={faCalendar} /></i>
        {#if !isAllDay}
          <SveltyPicker
            inputClasses="form-control time-picker"
            format="hh:ii"
            bind:value={startTime}
          /><i><FontAwesomeIcon icon={faClock} /></i>
        {/if}
        <span style="margin-right: 0.5rem;">-</span>
        <SveltyPicker
          inputClasses="form-control"
          format="yyyy-mm-dd"
          {startDate}
          bind:value={endDate}
        /><i><FontAwesomeIcon icon={faCalendar} /></i>
        {#if !isAllDay}
          <SveltyPicker
            inputClasses="form-control time-picker"
            format="hh:ii"
            bind:value={endTime}
          /><i><FontAwesomeIcon icon={faClock} /></i>
        {/if}
        <input type="checkbox" name="all-day" bind:checked={isAllDay} /><label
          for="all-day">종일</label
        >
      </div>
    </div>
    <div class="input-div">
      <span>위치</span>
      <input type="text" placeholder="위치" />
    </div>
    <div class="input-div">
      <span>설명</span>
      <textarea name="" id="" cols="20" rows="5" placeholder="일정 설명" />
    </div>
  </div>
  <!--footer-->
  <div
    class="footer-div flex items-center justify-center border-solid border-blueGray-200 rounded-b"
  >
    <button
      class="save-btn font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
      type="button"
      on:click={toggleModal}
    >
      등록하기
    </button>
  </div>
</div>
