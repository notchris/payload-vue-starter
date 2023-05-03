<template>
  <div class="flex flex-col w-full h-full">
    <SiteHeader :user="user" />
    <main class="flex-1 w-full"><router-view></router-view></main>
    <SiteFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import { useUserStore } from './store'
export default defineComponent({
  name: 'App',
  data() {
    return {
      user: false
    }
  },
  watch: {
    $route() {
      const store = useUserStore();
      (async () => {
        await store.getUser()
        this.user = store.user
      })()
    }
  },
  components: {
    SiteHeader,
    SiteFooter
  }
})
</script>
