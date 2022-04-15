<script>
  import { faComment } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "fontawesome-svelte";
  import FriendList from "./FriendList.svelte";
  import GroupList from "./GroupList.svelte";
  import ProjectList from "./ProjectList.svelte";
  import ChatList from "./ChatList.svelte";

  let openTab = 4;

  function toggleTabs(tabNumber) {
    openTab = tabNumber;
  }
</script>

<section id="main_section">
  <div style="display: flex; flex-wrap: wrap;">
    <div style="height: 100%; width: 100%;">
      <ul class="mypage-menu">
        <li>
          <span
            class=" {openTab === 1 ? 'active-tab' : 'disactive-tab'}"
            on:click={() => toggleTabs(1)}
          >
            채팅
          </span>
        </li>
        <li>
          <span
            class={openTab === 2 ? "active-tab" : "disactive-tab"}
            on:click={() => toggleTabs(2)}
          >
            친구
          </span>
        </li>
        <li>
          <span
            class={openTab === 3 ? "active-tab" : "disactive-tab"}
            on:click={() => toggleTabs(3)}
          >
            그룹
          </span>
        </li>
        <li>
          <span
            class={openTab === 4 ? "active-tab" : "disactive-tab"}
            on:click={() => toggleTabs(4)}
          >
            프로젝트
          </span>
        </li>
      </ul>
      <div class="content-div" style="height: 90%;">
        <div id="tab_div">
          <div class="tab-content tab-space">
            <div id="chat-container">
              <div id="chat-div">
                <ChatList />
              </div>
              <div id="tab-container">
                <div class="{openTab === 1 ? 'flex' : 'hidden'} tab" id="tab-1">
                  <i id="no-chat">
                    <FontAwesomeIcon icon={faComment} />
                  </i>
                </div>
                <div class="{openTab === 2 ? 'block' : 'hidden'} tab">
                  <FriendList />
                </div>
                <div class="{openTab === 3 ? 'block' : 'hidden'} tab">
                  <GroupList />
                </div>
                <div class="{openTab === 4 ? 'block' : 'hidden'} tab">
                  <ProjectList />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
