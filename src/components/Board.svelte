<script>
  import { faPlus } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "fontawesome-svelte";
  import { isProjectSelectModal, isCalendarAddModal } from "../store";
</script>

<div id="board-container">
  <div id="btn-div">
    <button
      class="white-btn"
      on:click={() => {
        $isProjectSelectModal = !$isProjectSelectModal;
      }}>프로젝트 선택</button
    >
  </div>
  <div id="project-div">
    <div class="shadow">
      <span>ff_나</span>
      <button>x</button>
    </div>
  </div>
  <div id="board-div">
    <!-- <div id="no-project">
      <i class="fas fa-project-diagram" />
      <p><span class="dark-p">프로젝트</span>를</p>
      <p>선택해 주세요</p>
    </div> -->
    <div id="project">
      {#each Array(3) as _, i}
        <div class="board-list">
          <p class="cat-title">준비</p>
          <div class="scroll-div">
            <div
              class="board"
              on:click={() => {
                console.log("hhh");
              }}
            >
              <p class="title">kick-off meeting</p>
              <div>
                <p class="date">3.10(Thur)13:00<br /> ~14:00</p>
              </div>
            </div>
            <div
              id="plus-div"
              on:click={() => {
                $isCalendarAddModal.open = true;
                $isCalendarAddModal.type = "card";
              }}
            >
              <i><FontAwesomeIcon icon={faPlus} /></i>
            </div>
          </div>
        </div>
      {/each}
      <div id="add-cat">
        <i><FontAwesomeIcon icon={faPlus} /></i>
        <span>카테고리 추가</span>
      </div>
    </div>
  </div>
</div>
