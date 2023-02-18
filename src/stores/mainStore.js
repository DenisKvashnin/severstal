import { defineStore } from "pinia";

export const useOffsetStore = defineStore("offset", {
  state: () => ({
    offset: null,
  }),
  getters: {},
  actions: {
    setOffset(offset) {
      if (offset > 352 && offset < 32567) {
        this.offset = offset;
      } else {
        this.offset = null;
      }
    },
  },
  persist: {
    enabled: true,
  },
});
