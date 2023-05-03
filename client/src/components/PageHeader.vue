
<template>
    <h1 class="text-4xl font-semibold my-6 border-b-2 pb-4">
        {{ title }}
    </h1>
</template>
              
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'PageHeader',
    props: {
        title: String
    }
})
</script>
              