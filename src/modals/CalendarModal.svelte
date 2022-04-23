<script>
  import {
    faCalendarCheck,
    faClipboardList,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "fontawesome-svelte";
  import { isCalendarAddModal, clickedDate } from "../store.js";
  import AddSchedule from "./AddSchedule.svelte";
  import AddCard from "./AddCard.svelte";

  function toggleModal() {
    $isCalendarAddModal.open = !$isCalendarAddModal.open;
  }
</script>

<div class="modal-container">
  <div class="modal-div">
    <!--content-->
    <div class="content-div">
      <!--header-->
      <div class="header-div">
        <button class="close-btn" on:click={toggleModal}>
          <span> × </span>
        </button>
      </div>
      <!--body-->
      <div class="body-div">
        {#if $isCalendarAddModal.type == ""}
          <div class="card-div">
            <button
              class="calendar-add-btn"
              on:click={() => {
                $isCalendarAddModal.type = "schedule";
              }}
            >
              <span>Add <span style="font-weight: bold;">Schedule</span></span>
              <i><FontAwesomeIcon icon={faCalendarCheck} /></i>
            </button>
            <button
              class="calendar-add-btn"
              on:click={() => {
                $isCalendarAddModal.type = "card";
              }}
            >
              <span>Add <span style="font-weight: bold;">Card</span></span>
              <i><FontAwesomeIcon icon={faClipboardList} /></i>
            </button>
          </div>
        {:else if $isCalendarAddModal.type == "schedule"}
          <AddSchedule />
        {:else}
          <AddCard />
        {/if}
      </div>
    </div>
  </div>
</div>
<!-- <div class="opacity-25 fixed inset-0 z-40 bg-black" /> -->
