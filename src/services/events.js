import Vue from 'vue';
export const EventBus = new Vue();
window.Event = EventBus;