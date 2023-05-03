<template>
    <div class="w-full h-full py-10 px-6 flex flex-col items-center">
        <div class="flex flex-col justify-center w-full max-w-md">
            <PageHeader title="Forgot Password"></PageHeader>
            <FormForgotPassword></FormForgotPassword>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageHeader from '../components/PageHeader.vue'
import FormForgotPassword from '../components/forms/FormForgotPassword.vue'
export default defineComponent({
    name: 'PageForgotPassword',
    components: {
        PageHeader,
        FormForgotPassword
    }
})
</script>
