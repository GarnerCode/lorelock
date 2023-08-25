export interface CampaignSummary {
    id: string,
    title: string,
    thumbnail: string,
}

export interface CampaignDetails {
    id: string,
    title: string,
    description: string,
    sessions: Array<string>, // Array of session ID's?
    characters: Array<string>, //Array of character ID's?
}