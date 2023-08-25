<template>
    <div id="campaigns-view">
        <div class="view-header">
            <div>Active Campaigns</div>
            <Button>New Campaign</Button>
        </div>
        <campaigns-list></campaigns-list>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import CampaignsList from '@/components/CampaignsList.vue';
    import Button from '@/components/shared/Button.vue';

    export default defineComponent({
        name: 'CampaignsView',
        components: {
            CampaignsList,
            Button,
        }
    })
</script>