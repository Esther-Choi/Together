import { writable, get } from 'svelte/store'

export const isLogin = writable(localStorage.getItem("isLogin") || 'false')
export const isCalendarAddModal = writable({open: false, type: ""});
export const isProjectSelectModal = writable(false);
export const clickedDate = writable();
export const pageType = writable(localStorage.getItem("pageType") || "calendar");

export const toggleCalendarAddModal = (info) => {
    isCalendarAddModal.set({open : isCalendarAddModal, type: ""});
    clickedDate.set(info);
}
  
pageType.subscribe((val) => localStorage.setItem("pageType", val))