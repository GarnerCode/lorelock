<template>
    <div id="login-view">
        <form v-if="!toggleRegister" id="login-form">
            <div class="field">
                <div class="label-container">
                    <label for="login-username">Username</label>
                </div>
                <input class="text-input" type="text" name="login-username">
            </div>
            <div class="field">
                <div class="label-container">
                    <label for="login-password">Password</label>
                </div>
                <input class="text-input" type="password" name="login-password">
            </div>
            <V-Button>Login</V-Button>
        </form>
        <form v-if="toggleRegister" id="register-form">
            <div class="field">
                <div class="label-container">
                    <label for="register-username">Username</label>
                </div>
                <input class="text-input" type="text" name="login-username">
            </div>
            <div class="field">
                <div class="label-container">
                    <label for="register-password">Password</label>
                </div>
                <input class="text-input" type="password" name="register-password">
            </div>
            <div class="field">
                <div class="label-container">
                    <label for="register-confirm-password">Confirm Password</label>
                </div>
                <input class="text-input" type="password" name="register-confirm-password">
            </div>
        </form>
        <div v-if="!toggleRegister">
            <p>New to Lorelock?</p>
            <V-Button @click="toggleRegister = true">Register</V-Button>
        </div>
        <div v-if="toggleRegister">
            <p>Already have an account?</p>
            <V-Button @click="toggleRegister = false">Login</V-Button>
        </div>
    </div>
</template>

<style lang="scss">
    #login-view {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        form {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
        }
    }
</style>

<script lang="ts">
    import { defineComponent } from 'vue';
    import VButton from '@/components/shared/VButton.vue';

    export default defineComponent({
        name: 'LoginView',
        data: () => {
            return {
                toggleRegister: false,
            }
        },
        components: {
            VButton,
        }
    })
</script>