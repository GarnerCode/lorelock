<template>
    <div id="welcome-view">
        <div class="welcome-content">
            <img src="../assets/logo-full.svg" alt="">
            <p>Lorelock is an under-development web application for managing Dungeons & Dragons campaigns, sessions, characters, encounters, and more!</p>
            <V-Button @click="$router.push('/dashboard/campaigns')">Go to Dashboard</V-Button>
        </div>
    </div>
</template>

<style lang="scss">
    @media screen and (min-width: 0px) {
        #welcome-view {
            display: flex;
            flex-direction: column;
            justify-content: center;
            .welcome-content {
                width: fit-content;
                margin: 0 auto;
                margin-top: 80px;
            }
            img {
                display: block;
                width: 300px;
                margin: 0 auto;
            }
            h1 {
                font-size: 1.25rem;
                text-align: center;
                font-weight: 500;
            }
            p {
                text-align: center;
            }
            .button {
                margin: 20px auto;
            }
        }
    }
    @media screen and (min-width: 768px) {
        #welcome-view {
            h1 {
                font-size: 1.75rem;
            }
            p {
                width: 500px;
            }
        }
    }
</style>

<script lang="ts">
    import { defineComponent } from 'vue';
    import VButton from '@/components/shared/VButton.vue';

    export default defineComponent({
        name: 'WelcomeView',
        components: {
            VButton,
        },
    })
</script>