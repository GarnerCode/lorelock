<template>
    <div class="campaign-details">
        <div class="view-header">
            <div class="row align-center gap-2">
                <VButton @click="$router.push('campaigns')">Go Back</VButton>
                <div>Campaign Title</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { CampaignDetails } from '@/interfaces/Campaign.interface';
    import VButton from '@/components/shared/VButton.vue';

    export default defineComponent({
        name: 'CampaignDetails',
        components: {
            VButton,
        },
        data: () => {
            return {
                campaign: null as CampaignDetails | null,
            }
        },
        mounted() {
            this.getCampaignById();
        },
        methods: {
            getCampaignById(): void {
                console.log('test');
            }
        }
    })
</script>