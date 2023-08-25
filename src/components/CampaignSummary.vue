<template>
    <div v-if="campaign" class="campaign-summary">
        <div>{{ campaign.title }}</div>
    </div>
</template>

<style lang="scss">
    @media screen and (min-width: 0px) {
        .campaign-summary {
            background-color: var(--color-navy-2);
            width: 100px;
            height: 100px;
            border-radius: 10px;
            padding: 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            cursor: pointer;
            transition: var(--transition);
            &:hover {
                background-color: var(--color-navy-4);
            }
        }
    }
</style>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'CampaignSummary',
        props: {
            campaign: {
                type: Object,
            }
        }
    })
</script>