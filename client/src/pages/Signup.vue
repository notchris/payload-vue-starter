<template>
    <div class="w-full h-full py-10 px-6 flex flex-col items-center">
        <div class="flex flex-col justify-center w-full max-w-md">
            <PageHeader title="Signup"></PageHeader>
            <FormSignup></FormSignup>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageHeader from '../components/PageHeader.vue'
import FormSignup from '../components/forms/FormSignup.vue'

export default defineComponent({
    name: 'PageSignup',
    components: {
        PageHeader,
        FormSignup
    }
})
</script>
