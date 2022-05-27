<script>
  import { faBell } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "fontawesome-svelte";
  import { pageType, isLogin } from "../store";
</script>

<nav class="nav-bar">
  <div class="nav-bar-div">
    <div class="img-div">
      <a href="#pablo">
        <img src="/assets/img/logo1.png" width="90px" alt="" />
      </a>
    </div>
    {#if $isLogin == "true"}
      <div class="btn-div">
        <ul>
          <li class="nav-item">
            <button
              on:click={() => {
                $pageType = "mypage";
              }}
            >
              마이페이지
            </button>
          </li>
          <li class="nav-item">
            <button
              on:click={() => {
                $pageType = "calendar";
              }}
            >
              캘린더
            </button>
          </li>
          <li class="nav-item">
            <button
              on:click={() => {
                $pageType = "board";
              }}
            >
              보드
            </button>
          </li>
          <li class="nav-item">
            <button
              on:click={() => {
                $pageType = "chart";
              }}
            >
              차트
            </button>
          </li>
          <li class="nav-item">
            <button
              on:click={() => {
                $pageType = "file";
              }}
            >
              파일
            </button>
          </li>
          <li class="nav-item">
            <button>
              <i style="font-size: 0.85rem;"
                ><FontAwesomeIcon icon={faBell} /></i
              >
            </button>
          </li>
        </ul>
      </div>
    {/if}
  </div>
</nav>
