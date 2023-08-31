<template>
    <div id="campaigns-view">
        <div class="view-header">
            <div>Active Campaigns</div>
            <VButton>New Campaign</VButton>
        </div>
        <campaigns-list></campaigns-list>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import CampaignsList from '@/components/CampaignsList.vue';
    import VButton from '@/components/shared/VButton.vue';

    export default defineComponent({
        name: 'CampaignsView',
        components: {
            CampaignsList,
            VButton,
        }
    })
</script>