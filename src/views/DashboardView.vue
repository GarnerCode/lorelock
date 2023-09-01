<template>
    <div id="dashboard-view">
        <Navbar></Navbar>
        <div id="dashboard-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<style lang="scss">
    @media screen and (min-width: 0px) {
        #dashboard-view {
            #dashboard-content {
                padding: 20px;
            }
            .view-header {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                border-bottom: 1px solid var(--color-navy-2);
                padding-bottom: 20px;
                margin-bottom: 20px;
                font-size: 1.25rem;
            }
        }
    }
    @media screen and (min-width: 1024px) {
        #dashboard-view {
            display: grid;
            grid-template-columns: 1.75fr 8.25fr;
        }
    }
    @media screen and (min-width: 1440px) {
        #dashboard-view {
            grid-template-columns: 1.25fr 8.75fr;
        }
    }
</style>

<script lang="ts">
    import { defineComponent } from 'vue';
    import Navbar from '@/components/Navbar.vue';

    export default defineComponent({
        name: 'DashboardView',
        components: {
            Navbar,
        }
    })
</script>