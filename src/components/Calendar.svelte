<script>
  import FullCalendar from "svelte-fullcalendar";
  import interactionPlugin from "@fullcalendar/interaction";
  import dayGridPlugin from "@fullcalendar/daygrid";
  import timeGridPlugin from "@fullcalendar/timegrid";
  import { isCalendarAddModal, toggleCalendarAddModal } from "../store";
  let options = {
    customButtons: {
      addButton: {
        text: "➕ New",
        click: function () {
          alert("clicked the custom button!");
        },
      },
    },
    events: [
      { title: "event 1", date: "2022-03-17" },
      { title: "event 2", date: "2022-03-10" },
      { title: "event 2", date: "2022-03-03" },
      { title: "event 2", date: "2022-03-24" },
      { title: "event 2", date: "2022-03-31" },
    ],
    initialView: "dayGridMonth",
    plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin],
    selectable: true,
    handleWindowResize: true,
    headerToolbar: {
      left: "prev next today addButton",
      center: "title",
      right: "dayGridMonth timeGridWeek timeGridDay",
    },
    dateClick: function (info) {
      toggleCalendarAddModal(info);
    },
  };

  function toggleModal(info) {
    $isCalendarAddModal = !$isCalendarAddModal;
  }
</script>

<div
  style="width: 100%;display: flex; justify-content: center; height: 90%; align-items: center;"
>
  <!-- <div style="height: 95%;">
    <div id="category-nav" style="flex-direction: column;">
      <div
        style="display: flex; flex-direction: column; align-items: flex-start;"
      >
        <div style="margin-bottom: 1rem;width: 100%;">
          <button style="width: 100%;"
            ><i class="fas fa-filter" /> FILTER</button
          >
          <button class="settingBtn"><span><i class="fas fa-cog" /></span></button>
        </div>
        <div class="category-div">
          <input type="checkbox" name="schedule" /><label for="schedule"
            >SCHEDULE</label
          >
        </div>
        <div class="category-div">
          <input type="checkbox" name="card" /><label for="card">CARD</label>
        </div>
        <div class="category-div">
          <input type="checkbox" name="my" /><label for="my">MY</label>
        </div>
      </div>
    </div>
  </div> -->
  <FullCalendar {options} />
</div>
