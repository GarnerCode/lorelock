export const nav = [
    {
        category: 'Story',
        icon: 'book.svg',
        links: [
            {
                label: 'Campaigns',
                route: 'campaigns',
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
        icon: 'swords.svg',
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
        icon: 'paper.svg',
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