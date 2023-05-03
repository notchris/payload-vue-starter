<template>
    <div class="w-full h-full py-10 px-6 flex flex-col items-center">
        <div class="flex flex-col justify-center w-full max-w-lg">
            <PageHeader title="Reset Password"></PageHeader>
            <FormResetPassword></FormResetPassword>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageHeader from '../components/PageHeader.vue'
import FormResetPassword from '../components/forms/FormResetPassword.vue'
export default defineComponent({
    name: 'PageResetPassword',
    components: {
        PageHeader,
        FormResetPassword
    }
})
</script>
