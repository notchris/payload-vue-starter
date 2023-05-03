<template>
    <div v-show="!submitted">
        <FormKit type="form"
                 @submit="doResetPassword"
                 #default="{ value }"
                 submit-label="Submit"
                 :submit-attrs="{
                         inputClass: 'px-2.5 py-1.5 rounded border bg-blue-600 text-white hover:bg-blue-500 active:bg-blue-700 border-opacity-0 w-full max-w-md sm:w-auto',
                         wrapperClass: 'im-on-the-wrapper',
                         outerClass: 'im-on-the-outer-wrapper'
                     }"
                 :actions="false"
                 :errors="errors"
                 :classes="{
                         messages: 'list-none p-0 mt-1 mb-0',
                         message: 'text-red-500 mb-1 text-xs'
                     }">

            <FormKit type="password"
                     name="password"
                     id="password"
                     validation="required"
                     validation-visibility="live"
                     label="Password"
                     placeholder=""
                     :classes="{
                             outer: 'mb-5',
                             label: 'block mb-1 font-bold text-sm',
                             inner: 'max-w-md border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500 ',
                             input: 'w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400',
                             help: 'text-xs text-gray-500',
                             messages: 'list-none p-0 mt-1 mb-0 text-red-500',
                             message: 'text-red-500 mb-1 text-xs'
                         }" />

            <FormKit type="password"
                     name="password_confirm"
                     id="password_confirm"
                     validation="required|confirm"
                     validation-visibility="live"
                     validation-label="Password confirmation"
                     label="Confirm Password"
                     placeholder=""
                     :classes="{
                             outer: 'mb-5',
                             label: 'block mb-1 font-bold text-sm',
                             inner: 'max-w-md border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500 ',
                             input: 'w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400',
                             help: 'text-xs text-gray-500',
                             messages: 'list-none p-0 mt-1 mb-0 text-red-500',
                             message: 'text-red-500 mb-1 text-xs'
                         }" />

            <div class="block sm:flex justify-between items-center max-w-md">
                <router-link class="hover:text-gray-500 text-sm block mb-5 sm:mb-0"
                             to="login">Back to Login</router-link>
                <FormKit type="submit"
                         label="Submit"
                         :classes="{
                                 outer: 'w-full max-w-md sm:w-auto',
                                 input: 'px-2.5 py-1.5 rounded border bg-blue-600 text-white hover:bg-blue-500 active:bg-blue-700 border-opacity-0 w-full max-w-md sm:w-auto'
                             }" />

            </div>

        </FormKit>
    </div>
    <div v-show="submitted">
        <p class="text-xl font-medium mb-10">
            Your password has been reset. You may now <router-link class="hover:text-black/50 cursor-pointer"
                         to="login">login</router-link> to your account.
        </p>
        <router-link class="px-2.5 py-1.5 rounded border hover:bg-neutral-100 active:bg-neutral-200"
                     to="login">Back to Login</router-link>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'FormResetPassword',
    data() {
        return {
            errors: [],
            submitted: false
        }
    },
    mounted() {
        if (!this.$route.query.token) {
            this.$router.push('login')
        }
    },
    methods: {
        async doResetPassword(fields: { password: string }) {
            try {
                const res = await fetch(this.$apiRoot + 'api/users/reset-password', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        token: this.$route.query.token,
                        password: fields.password,
                    })
                })
                const json = await res.json()
                if (json.errors) {
                    this.errors = json.errors.map((error) => error.message)
                } else {
                    this.submitted = true
                    console.log(json)
                }
            } catch (err) {
                console.log(err)
            }
        }
    }
})
</script>
