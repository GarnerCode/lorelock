import { defineStore } from 'pinia'
import { CampaignSummary, CampaignDetails } from '@/interfaces/Campaign.interface'

export const useStoryStore = defineStore('storyStore', {
    state: () => ({
        campaignSummaries: [] as Array<CampaignSummary>,
    }),
    getters: {
        getCampaignSummaries: (state): Array<CampaignSummary> => {
            return state.campaignSummaries;
        },
    },
    actions: {
        // getCampaignDetailsById(id: string): CampaignDetails {
        //     const target = this.campaignSummaries.find((campaign: CampaignSummary) => {
        //         return campaign.id === id;
        //     });
        //     return target;
        // }
    }
})