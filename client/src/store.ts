import { defineStore } from "pinia";
import { apiRoot } from "./main";

export const useUserStore = defineStore("user", {
  state: () => ({ user: false }),
  actions: {
    async getUser() {
      try {
        const res = await fetch(apiRoot + "api/users/me", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        const json = await res.json();
        if (json.user) {
          this.user = json.user;
        } else {
          this.user = false;
        }
      } catch (error) {
        this.user = false;
        console.error(error);
        return false;
      }
    },
    async logout() {
      try {
        const res = await fetch(apiRoot + "api/users/logout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        const json = await res.json();
        this.user = false;
      } catch (error) {
        this.user = false;
        console.error(error);
      }
    },
  },
});
