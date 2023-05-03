<template>
    <div class="w-full h-full py-10 px-6 flex flex-col items-center">
        <div class="flex flex-col justify-center w-full max-w-md">
            <PageHeader title="Account"></PageHeader>
            <p class="prose text-xl text-black/75">This is an account page, visible only to registered users.</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageHeader from '../components/PageHeader.vue'
export default defineComponent({
    name: 'PageAccount',
    components: {
        PageHeader
    }
})
</script>
