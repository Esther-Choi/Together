<script>
  import { faCalendar, faClock } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "fontawesome-svelte";
  import { isCalendarAddModal, clickedDate } from "../store.js";
  import SveltyPicker from "svelty-picker";
  import Select from "svelte-select";

  let projectList = [
    { value: "프로젝트1", label: "프로젝트1" },
    { value: "프로젝트2", label: "프로젝트2" },
    { value: "프로젝트3", label: "프로젝트3" },
  ];
  let category = [
    { value: "준비", label: "준비" },
    { value: "진행", label: "진행" },
    { value: "완료", label: "완료" },
  ];

  let selectedProject;
  let selectedCategory =
    selectedProject == undefined ? "프로젝트 선택 필요" : "준비";
  let isDisabled = true;

  function handleSelect(event) {
    isDisabled = false;
    // .. do something here 🙂
  }

  function handleClear(event) {
    isDisabled = true;
    // .. do something here 🙂
  }

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
  let isUnknown = false;

  function toggleModal() {
    $isCalendarAddModal.open = !$isCalendarAddModal.open;
    $isCalendarAddModal.type = "";
  }
</script>

<div id="schedule-container">
  <div style="padding: 0 2rem;">
    <input class="title-input" type="text" placeholder="카드 제목" />
  </div>
  <div
    style="overflow-y: scroll;height: 380px;margin-bottom: 1rem; padding: 0 2rem;"
  >
    <div class="input-div">
      <span>프로젝트</span>
      <Select
        items={projectList}
        bind:value={selectedProject}
        on:select={handleSelect}
        on:clear={handleClear}
        placeholder="프로젝트 검색"
      />
    </div>
    <div class="input-div">
      <span>기간</span>
      <div
        class="date-div {isUnknown ? 'disable' : ''}"
        style="display: flex; flex-direction: column; align-items: flex-start;"
      >
        <div style="display: flex; align-items: center;">
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
        </div>
        <div style="margin-top: 0.5rem;">
          <input
            type="checkbox"
            style="margin-left: 0 !important;"
            name="all-day"
            bind:checked={isAllDay}
          /><label for="all-day" style="margin-right: 1rem !important;"
            >종일</label
          >
          <input
            type="checkbox"
            name="unknown"
            bind:checked={isUnknown}
          /><label for="unknown">미정</label>
        </div>
      </div>
    </div>
    <div class="input-div">
      <span>카테고리</span>
      <Select
        items={category}
        bind:value={selectedCategory}
        on:select={handleSelect}
        {isDisabled}
        isClearable="true"
      />
    </div>
    <div class="input-div">
      <span>설명</span>
      <textarea name="" id="" cols="20" rows="5" placeholder="일정 설명" />
    </div>
  </div>
  <div class="footer-div">
    <button class="save-btn" type="button" on:click={toggleModal}>
      등록하기
    </button>
  </div>
</div>
<!--footer-->
