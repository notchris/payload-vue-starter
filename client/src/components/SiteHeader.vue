<template>
  <header class="flex items-center py-3 px-6 justify-between border-b">
    <div>
      App
    </div>
    <div>
      <nav v-if="!user"
           class="flex gap-4">
        <router-link class="hover:text-black/50 border-b-2 border-b-transparent cursor-pointer"
                     to="/">Home</router-link>
        <router-link class="hover:text-black/50 border-b-2 border-b-transparent cursor-pointer"
                     to="/login">Login</router-link>
        <router-link class="hover:text-black/50 border-b-2 border-b-transparent cursor-pointer"
                     to="/signup">Signup</router-link>
      </nav>
      <nav class="flex gap-4"
           v-else>
        <router-link class="hover:text-black/50 border-b-2 border-b-transparent cursor-pointer"
                     to="/">Home</router-link>
        <router-link class="hover:text-black/50 border-b-2 border-b-transparent cursor-pointer"
                     to="/account">Account</router-link>
        <router-link class="hover:text-black/50 border-b-2 border-b-transparent cursor-pointer"
                     to="/logout">Logout</router-link>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "SiteHeader",
  props: {
    user: {

      required: false
    }
  }
})
</script>

<style>
.router-link-active {
  @apply text-black/50 border-b-black/20;
}
</style>
