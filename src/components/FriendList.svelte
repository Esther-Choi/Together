<script>
  import { faSearch, faPlus } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "fontawesome-svelte";
</script>

<div id="list-nav">
  <span class="underline-title">내 친구</span>
  <button type="button">
    <FontAwesomeIcon icon={faPlus} />&nbsp; 친구 초대
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
  <p class="font-bold">내 친구</p>
  <ul>
    {#each Array(5) as _, i}
      <li>
        <img src="/assets/img/team-2-800x800.jpg" alt="" width="60px" />
        <div>
          <p>김개발</p>
          <p class="status-msg">김개발은 개발중입니다.</p>
        </div>
      </li>
    {/each}
  </ul>
</div>
