// Data to be used for testing until database and APIs are functional.

import { CampaignSummary } from "@/interfaces/Campaign.interface";
import { CampaignDetails } from "@/interfaces/Campaign.interface";

export const campaignSummaries: Array<CampaignSummary> = [
    {
        id: '1',
        title: 'Rise of Tiamat',
        thumbnail: '',
    },
    {
        id: '2',
        title: 'Curse of Strahd',
        thumbnail: '',
    },
    {
        id: '3',
        title: 'Dungeons of Drakkenheim',
        thumbnail: '',
    },
]

export const campaigns: Array<CampaignDetails> = [
    {
        id: '1',
        title: 'Rise of Vecna',
        description: '',
        sessions: [],
        characters: [],
    },
    {
        id: '2',
        title: 'Curse of Strahd',
        description: '',
        sessions: [],
        characters: [],
    },
    {
        id: '3',
        title: 'Dungeons of Drakkenheim',
        description: '',
        sessions: [],
        characters: [],
    },
]