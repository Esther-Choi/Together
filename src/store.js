import { writable, get } from 'svelte/store'

export const isCalendarAddModal = writable({open: false, type: ""});
export const isProjectSelectModal = writable(false);
export const clickedDate = writable();
export const pageType = writable(localStorage.getItem("pageType") || "calendar");

export const toggleCalendarAddModal = (info) => {
    isCalendarAddModal.set(isCalendarAddModal);
    clickedDate.set(info);
}
  
pageType.subscribe((val) => localStorage.setItem("pageType", val))