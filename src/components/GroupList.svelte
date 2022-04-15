<script>
  import {
    faSearch,
    faPlus,
    faUserCircle,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "fontawesome-svelte";
</script>

<div id="list-nav">
  <span class="underline-title">내 그룹</span>
  <button type="button">
    <FontAwesomeIcon icon={faPlus} />&nbsp; 그룹 생성
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
    placeholder="초성 또는 이름으로 내 그룹 검색"
    class="search-input"
  />
</div>
<div id="friendList_container">
  <p class="font-bold">내 그룹</p>
  <ul>
    {#each Array(5) as _, i}
      <li>
        <img
          src="/assets/img/team-2-800x800.jpg"
          alt=""
          width="55px"
          style="border-radius: 17px;"
        />
        <div id="group-info">
          <p>1 그룹</p>
          <p class="status-msg">
            <i><FontAwesomeIcon icon={faUserCircle} /></i>
            <span>그룹 대표</span>
            <span>&#183</span>
            <span>회원 1</span>
          </p>
        </div>
      </li>
    {/each}
  </ul>
</div>
