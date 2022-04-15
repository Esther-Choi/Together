<script>
  import { faSearch } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "fontawesome-svelte";
</script>

<div class="search-div">
  <span>
    <i>
      <FontAwesomeIcon icon={faSearch} style="color: #b3b3b3;" />
    </i>
  </span>
  <input
    type="text"
    placeholder="채팅방 이름, 친구 검색"
    class="search-input"
  />
</div>
<div id="chatList_container">
  <ul>
    {#each Array(5) as _, i}
      <li>
        <img src="/assets/img/team-2-800x800.jpg" alt="" width="60px" />
        <div>
          <div class="name-date">
            <p class="name">김개발</p>
            <span class="date">오전 09:54</span>
          </div>
          <p class="status-msg">김개발은 개발중입니다.</p>
        </div>
      </li>
    {/each}
  </ul>
</div>
