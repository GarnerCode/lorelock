export const nav = [
    {
        category: 'Story',
        links: [
            {
                label: 'Campaigns',
                route: 'campaigns',
                active: true,
            },
            {
                label: 'Sessions',
                route: 'sessions',
                active: true,
            },
            {
                label: 'Characters',
                route: 'characters',
                active: false,
            },
        ]
    },
    {
        category: 'Combat',
        links: [
            {
                label: 'Encounters',
                route: 'encounters',
                active: false,
            },
            {
                label: 'Creatures',
                route: 'creatures',
                active: false,
            },
        ]
    },
    {
        category: 'Resources',
        links: [
            {
                label: 'Races',
                route: 'races',
                active: false,
            },
            {
                label: 'Classes',
                route: 'classes',
                active: false,
            },
            {
                label: 'Spells',
                route: 'spells',
                active: false,
            },
            {
                label: 'Items',
                route: 'items',
                active: false,
            },
            {
                label: 'Maps',
                route: 'maps',
                active: false,
            },
        ]
    },
]