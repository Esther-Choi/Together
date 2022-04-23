<script>
  import { isProjectSelectModal } from "../store.js";
  import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "fontawesome-svelte";

  function toggleModal() {
    $isProjectSelectModal = !$isProjectSelectModal;
  }
</script>

<div class="modal-container">
  <div id="project-modal-div" class="modal-div">
    <!--content-->
    <div
      style="width: 500px; margin: 0 auto;height: 525px;"
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
          <div style="height: 355px;margin-bottom: 1rem; padding: 0 2rem;">
            <div class="input-div">
              <input type="text" placeholder="프로젝트 이름 검색" />
            </div>
            <div id="friendList_container" class="proj-div">
              <ul>
                {#each Array(5) as _, i}
                  <li class="project-li">
                    <div style="width: 89%;">
                      <label for="select">
                        <div
                          style="display: flex; width: 100%; justify-content :space-between"
                        >
                          <p class="project-title">SPPA 고도화 프로젝트</p>
                          <span class="date">22.03.10</span>
                        </div>
                        <p class="status-msg">
                          <i><FontAwesomeIcon icon={faUserCircle} /></i>
                          <span>대장</span>
                        </p>
                      </label>
                    </div>
                    <div>
                      <input type="radio" name="select" id="select" />
                    </div>
                  </li>
                {/each}
              </ul>
            </div>
          </div>
          <div class="footer-div" style="height: 60px;">
            <button
              class="save-btn cancel-btn"
              type="button"
              on:click={toggleModal}
            >
              취소
            </button>
            <button class="save-btn" type="button" on:click={toggleModal}>
              확인
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="opacity-25 fixed inset-0 z-40 bg-black" />

<style>
  input {
    font-size: 0.8rem;
  }

  .footer-div button {
    width: 80px;
  }
</style>
