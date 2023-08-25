<template>
    <div class="campaigns-list">
        <campaign-summary 
            v-for="campaign of campaignSummaries" 
            :key="campaign.id"
            :campaign="campaign"
            ></campaign-summary>
    </div>
</template>

<style lang="scss">
    @media screen and (min-width: 0px) {
        .campaigns-list {
            display: flex;
            flex-direction: row;
            gap: 20px;
            flex-wrap: wrap;
        }
    }
</style>

<script lang="ts">
    import { defineComponent } from 'vue';
    import CampaignSummary from './CampaignSummary.vue';
    import { campaignSummaries } from '@/constants/testData';

    export default defineComponent({
        name: 'CampaignsList',
        data: () => {
            return {
                campaignSummaries,
            }
        },
        components: {
            CampaignSummary,
        }
    })
</script>