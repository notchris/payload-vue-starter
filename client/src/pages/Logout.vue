<template>
    <div class="w-full h-full py-10 px-6 flex flex-col items-center">
        <div class="flex flex-col justify-center w-full max-w-md">
            <PageHeader title="Logout"></PageHeader>
            <p class="prose text-xl text-black/75">Redirecting back to the home.</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageHeader from '../components/PageHeader.vue'
export default defineComponent({
    name: 'PageLogout',
    components: {
        PageHeader
    }
})
</script>
