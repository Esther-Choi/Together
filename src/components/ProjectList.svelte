<script>
  import { faSearch, faPlus } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "fontawesome-svelte";
  import ProjectComp from "./ProjectComp.svelte";
  let mode = "ing";

  function toggleTabs(type) {
    mode = type;
  }
</script>

<div id="list-nav">
  <div>
    <span
      style="margin-right: 20px; padding-bottom: 8px; cursor: pointer;"
      class={mode == "ing" ? "underline-title" : "not-selected"}
      on:click={() => toggleTabs("ing")}>진행 중</span
    >
    <span
      style="padding-bottom: 8px;cursor: pointer;"
      class={mode == "done" ? "underline-title" : "not-selected"}
      on:click={() => toggleTabs("done")}>완료</span
    >
  </div>
  <button
    class="text-white active:bg-blueGray-600 font-bold uppercase text-xs px-4 py-2 rounded hover: outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
    type="button"
  >
    <FontAwesomeIcon icon={faPlus} />&nbsp; 프로젝트 생성
  </button>
</div>
<div
  class="search-div"
  style="padding: 1.5rem;
    padding-top: 0;
}"
>
  <span>
    <i style="color: #b3b3b3;"><FontAwesomeIcon icon={faSearch} /></i>
  </span>
  <input
    type="text"
    placeholder="초성 또는 이름으로 검색"
    class="search-input"
  />
</div>
<div id="friendList_container">
  <p style="font-size: 14px;">
    {mode == "ing" ? "진행 중 " : "완료된 "}프로젝트
  </p>
  <ProjectComp />
</div>
