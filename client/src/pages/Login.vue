<template>
    <div class="w-full h-full py-10 px-6 flex flex-col items-center">
        <div class="flex flex-col justify-center w-full max-w-md">
            <PageHeader title="Login"></PageHeader>
            <FormLogin></FormLogin>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageHeader from '../components/PageHeader.vue'
import FormLogin from '../components/forms/FormLogin.vue'

export default defineComponent({
    name: 'PageLogin',
    computed: {
    },
    components: {
        PageHeader,
        FormLogin
    }
})
</script>
