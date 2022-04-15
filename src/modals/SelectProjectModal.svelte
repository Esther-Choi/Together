<script>
  import { isProjectSelectModal } from "../store.js";
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

  function toggleModal() {
    $isProjectSelectModal = !$isProjectSelectModal;
  }
</script>

<div
  style="position: absolute; overflow: hidden;
    top: 0; background-color: rgb(63,63,63,0.2);}"
  class="modal-container"
>
  <div
    id="project-modal-div"
    class="modal-div"
    style="display: flex; align-items: center; z-index: 2;"
  >
    <!--content-->
    <div
      style="width: 500px; margin: 0 auto;height: 525px;}"
      class="content-div"
    >
      <!--header-->
      <div id="header-div">
        <span>프로젝트 선택</span>
        <button class="close-btn" on:click={toggleModal}>
          <span class=""> × </span>
        </button>
      </div>
      <!--body-->
      <div class="body-div" style="width: 100%;">
        <div id="schedule-container">
          <div
            style="overflow-y: scroll;height: 395px;margin-bottom: 1rem; padding: 0 2rem;"
          >
            <div class="input-div">
              <Select
                items={projectList}
                bind:value={selectedProject}
                on:select={handleSelect}
                on:clear={handleClear}
                placeholder="프로젝트 이름 검색"
              />
            </div>
            <div id="friendList_container">
              <ul>
                <li class="flex items-center project-li">
                  <div class="w-full">
                    <div class="flex w-full justify-between">
                      <p class="project-title">SPPA 고도화 프로젝트</p>
                      <span class="date">22.03.10</span>
                    </div>
                    <p class="status-msg">
                      <i class="fas fa-user-circle" />
                      <!-- <img
              src="/assets/img/team-2-800x800.jpg"
              alt=""
              width="15px"
              style="border-radius: 50%;"
            /> -->
                      <span>대장</span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="footer-div">
            <button class="save-btn" type="button" on:click={toggleModal}>
              등록하기
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="opacity-25 fixed inset-0 z-40 bg-black" />

<style>
</style>
