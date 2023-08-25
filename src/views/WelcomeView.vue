<template>
    <div id="welcome-view">
        <div class="welcome-content">
            <h1>Take Control of Your<br/>Dungeons & Dragons Campaigns</h1>
            <p>Lorelock is an under-development web application for managing Dungeons & Dragons campaigns, sessions, characters, encounters, and more!</p>
            <Button @click="$router.push('/dashboard/sessions')">Go to Dashboard</Button>
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
    import Button from '@/components/shared/Button.vue';

    export default defineComponent({
        name: 'WelcomeView',
        components: {
            Button,
        },
    })
</script>