<script>
  import {
    SvelteGantt,
    SvelteGanttDependencies,
    SvelteGanttExternal,
    SvelteGanttTable,
    MomentSvelteGanttDateAdapter,
  } from "svelte-gantt";
  import { onMount, getContext } from "svelte";
  import moment from "moment";
  // import GanttOptions from "svelte-gantt/";
  const currentStart = time("06:00");
  const currentEnd = time("18:00");
  export const data = {
    rows: [
      {
        id: 1,
        label: "Accounting",
      },
      {
        id: 2,
        label: "Business Development",
      },
      {
        id: 3,
        label: "Ida Flewan",
      },
      {
        id: 4,
        label: "Lauréna Shrigley",
      },
      {
        id: 5,
        label: "Ange Kembry",
      },
    ],
    tasks: [
      {
        id: 3,
        resourceId: 1,
        label: "PET-CT",
        from: time("13:30"),
        to: time("15:00"),
        classes: "orange",
      },
      {
        id: 4,
        resourceId: 1,
        label: "Auditing",
        from: time("9:30"),
        to: time("11:30"),
        classes: "orange",
      },
      {
        id: 5,
        resourceId: 2,
        label: "Security Clearance",
        from: time("15:15"),
        to: time("16:00"),
        classes: "green",
      },
      {
        id: 6,
        resourceId: 2,
        label: "Policy Analysis",
        from: time("14:00"),
        to: time("17:00"),
        classes: "blue",
      },
      {
        id: 7,
        resourceId: 2,
        label: "Xbox 360",
        from: time("13:00"),
        to: time("14:00"),
        classes: "blue",
      },
      {
        id: 8,
        resourceId: 3,
        label: "GNU/Linux",
        from: time("14:00"),
        to: time("15:30"),
        classes: "blue",
      },
      {
        id: 9,
        resourceId: 4,
        label: "Electronic Trading",
        from: time("15:00"),
        to: time("17:00"),
        classes: "green",
      },
      {
        id: 10,
        resourceId: 5,
        label: "Alternative Medicine",
        from: time("14:30"),
        to: time("15:30"),
        classes: "orange",
      },
    ],
    dependencies: [],
  };
  let options = {
    dateAdapter: new MomentSvelteGanttDateAdapter(moment),
    rows: data.rows,
    tasks: data.tasks,
    dependencies: data.dependencies,
    timeRanges: [],
    columnOffset: 15,
    magnetOffset: 15,
    rowHeight: 52,
    rowPadding: 6,
    headers: [
      { unit: "day", format: "MMMM Do" },
      { unit: "hour", format: "H:mm" },
    ],
    fitWidth: true,
    minWidth: 800,
    from: currentStart,
    to: currentEnd,
    tableHeaders: [
      { title: "Label", property: "label", width: 140, type: "tree" },
    ],
    tableWidth: 240,
    ganttTableModules: [SvelteGanttTable],
    ganttBodyModules: [SvelteGanttDependencies],
    taskElementHook: (node, task) => {
      let popup;
      function onHover() {
        console.log("[task] hover", task);
        popup = createPopup(task, node);
      }
      function onLeave() {
        console.log("[task] hover", task);
        if (popup) {
          popup.remove();
        }
      }
      node.addEventListener("mouseenter", onHover);
      node.addEventListener("mouseleave", onLeave);
      return {
        destroy() {
          console.log("[task] destroy");
          node.removeEventListener("mouseenter", onHover);
          node.removeEventListener("mouseleave", onLeave);
        },
      };
    },
    // taskContent: (task) => `${task.label} ${task.from.format('HH:mm')}`
  };
  let gantt;
  onMount(() => {
    window.gantt = gantt = new SvelteGantt({
      target: document.getElementById("example-gantt-events"),
      props: options,
    });
    gantt.api.tasks.on.move((task) => console.log("Listener: task move", task));
    //gantt.api.tasks.on.switchRow((task, row, previousRow) => console.log('Listener: task switched row', task));
    gantt.api.tasks.on.select((task) =>
      console.log("Listener: task selected", task)
    );
    //gantt.api.tasks.on.moveEnd((task) => console.log('Listener: task move end', task));
    gantt.api.tasks.on.change(([data]) =>
      console.log("Listener: task change", data)
    );
    gantt.api.tasks.on.changed((task) =>
      console.log("Listener: task changed", task)
    );
    gantt.api.tasks.on.dblclicked((task) =>
      console.log("Listener: task double clicked", task)
    );
  });
  function createPopup(task, node) {
    const rect = node.getBoundingClientRect();
    const div = document.createElement("div");
    div.className = "sg-popup";
    div.innerHTML = `
            <div class="sg-popup-title">${task.label}</div>
            <div class="sg-popup-item">
                <div class="sg-popup-item-label">From:</div>
                <div class="sg-popup-item-value">${new Date(
                  task.from
                ).toLocaleTimeString()}</div>
            </div>
            <div class="sg-popup-item">
                <div class="sg-popup-item-label">To:</div>
                <div class="sg-popup-item-value">${new Date(
                  task.to
                ).toLocaleTimeString()}</div>
            </div>
        `;
    div.style.position = "absolute";
    div.style.top = `${rect.bottom}px`;
    div.style.left = `${rect.left + rect.width / 2}px`;
    document.body.appendChild(div);
    return div;
  }
  function onChangeOptions(event) {
    const opts = event.detail;
    Object.assign(options, opts);
    gantt.$set(options);
  }
  //   import {
  //     SvelteGantt,
  //     SvelteGanttDependencies,
  //     SvelteGanttTable,
  //     MomentSvelteGanttDateAdapter,
  //   } from "svelte-gantt";
  //   import moment from "moment";
  //   import { afterUpdate, onMount } from "svelte/internal";

  function time(input) {
    console.log(moment(input, "DD/MM/YY").toISOString());
    return moment(input, "DD/MM/YY");
  }

  //   const currentStart = time("01/01/22");
  //   const currentEnd = time("30/06/23");
  //   //   const date1 = new Date('7/13/2010');
  //   // const date2 = new Date('12/15/2010');
  //   const diffTime = Math.abs(currentEnd - currentStart);
  //   const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  //   console.log(diffDays);

  //   const data = {
  //     rows: [
  //       {
  //         id: 1,
  //         label: "Ryan",
  //       },
  //       {
  //         id: 2,
  //         label: "David",
  //       },
  //     ],
  //     tasks: [
  //       {
  //         id: 1,
  //         resourceId: 1,
  //         label: "PET-CT",
  //         from: time("01/01/22"),
  //         to: time("15/01/22"),
  //         classes: "orange",
  //       },
  //       {
  //         id: 2,
  //         resourceId: 1,
  //         label: "Auditing",
  //         from: time("15/01/22"),
  //         to: time("31/01/22"),
  //         classes: "orange",
  //       },
  //       {
  //         id: 3,
  //         resourceId: 2,
  //         label: "Auditing",
  //         from: time("15/01/22"),
  //         to: time("31/01/22"),
  //         classes: "orange",
  //       },
  //     ],
  //     dependencies: [],
  //   };
  //   let options = {
  //     dateAdapter: new MomentSvelteGanttDateAdapter(moment),
  //     rows: data.rows,
  //     tasks: data.tasks,
  //     dependencies: data.dependencies,
  //     timeRanges: [],
  //     columnUnit: "day",
  //     columnOffset: 1,
  //     magnetUnit: "day",
  //     magnetOffset: 31,
  //     rowHeight: 52,
  //     rowPadding: 6,
  //     headers: [
  //       //   { unit: "year", format: "YYYY", sticky: true },
  //       //   { unit: "month", format: "MM", sticky: true },
  //       { unit: "day", format: "MM.DD", sticky: false, offset: 1 },
  //     ],
  //     fitWidth: true,
  //     minWidth: diffDays * 70,
  //     from: currentStart,
  //     to: currentEnd,
  //     tableHeaders: [
  //       { title: "프로젝트", property: "label", width: 180, type: "tree" },
  //       { title: "제목", property: "label", width: 180, type: "tree" },
  //       { title: "카테고리", property: "label", width: 120, type: "tree" },
  //       { title: "담당자", property: "label", width: 120, type: "tree" },
  //     ],
  //     tableWidth: 600,
  //     ganttTableModules: [SvelteGanttTable],
  //     ganttBodyModules: [SvelteGanttDependencies],
  //   };

  //   onMount(() => {
  //     var gantt = new SvelteGantt({
  //       // target a DOM element
  //       target: document.getElementById("example-gantt"),
  //       // svelte-gantt options
  //       props: options,
  //     });
  //   });
</script>

<div id="example-gantt" />
<!-- <GanttOptions {options} on:change={onChangeOptions} /> -->
