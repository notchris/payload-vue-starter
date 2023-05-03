<template>
    <FormKit type="form"
             @submit="doSignup"
             #default="{ value }"
             :actions="false"
             :submit-attrs="{
                     inputClass: 'px-2.5 py-1.5 rounded border bg-blue-600 text-white hover:bg-blue-500 active:bg-blue-700 border-opacity-0 w-full max-w-md sm:w-auto',
                     wrapperClass: 'im-on-the-wrapper',
                     outerClass: 'im-on-the-outer-wrapper'
                 }"
             :errors="errors"
             :classes="{
                     messages: 'list-none p-0 mt-1 mb-0',
                     message: 'text-red-500 mb-1 text-xs'
                 }">
        <FormKit type="email"
                 name="email"
                 id="email"
                 validation="required|email"
                 validation-visibility="dirty"
                 dirty-behavior="touched"
                 label="Email Address"
                 placeholder="you@youremail.com"
                 :classes="{
                         outer: 'mb-5',
                         label: 'block mb-1 font-bold text-sm',
                         inner: 'max-w-md border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500 ',
                         input: 'w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400',
                         help: 'text-xs text-gray-500',
                         messages: 'list-none p-0 mt-1 mb-0',
                         message: 'text-red-500 mb-1 text-xs'
                     }" />

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
                     label="Signup"
                     :classes="{
                             outer: 'w-full max-w-md sm:w-auto',
                             input: 'px-2.5 py-1.5 rounded border bg-blue-600 text-white hover:bg-blue-500 active:bg-blue-700 border-opacity-0 w-full max-w-md sm:w-auto'
                         }" />

        </div>
    </FormKit>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'FormSignup',
    data() {
        return {
            errors: []
        }
    },
    methods: {
        async doSignup(fields: { email: string, password: string, confirm_password: string }) {
            try {
                const res = await fetch(this.$apiRoot + 'api/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: fields.email,
                        password: fields.password,
                    })
                })
                const json = await res.json()
                if (json.errors) {
                    this.errors = ['Invalid email or password.']
                } else {
                    this.errors = []
                    console.log(json)
                }
            } catch (err) {
                console.log(err)
            }
        }
    }
})
</script>
