<template>
    <div id="dashboard-view">
        <Navbar></Navbar>
        <div id="dashboard-content">
            This is the dashboard where cool dashboard content goes.
        </div>
    </div>
</template>

<style lang="scss">
    @media screen and (min-width: 0px) {
        #dashboard-view {
            #dashboard-content {
                padding: 20px;
            }
        }
    }
    @media screen and (min-width: 1024px) {
        #dashboard-view {
            display: grid;
            grid-template-columns: 1.5fr 8.5fr;
        }
    }
</style>

<script lang="ts">
    import { defineComponent } from 'vue';
    import Navbar from '@/components/shared/Navbar.vue';

    export default defineComponent({
        name: 'DashboardView',
        components: {
            Navbar,
        }
    })
</script>