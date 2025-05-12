import { defineConfig } from 'vitepress'


export default defineConfig({
  title: 'AviLink', // Tittel på din side
  description: 'Velkommen til min Document site!',
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        maxSuggestions: 10, // Hvor mange søgeresultater der vises
        hotKeys: ['s', '/'], // Tastaturgenveje til at åbne søgning
        miniSearch: {
          fields: ['title'], // Kun søg i titler
          storeFields: ['title'], // Hvad der gemmes i indekset
          searchOptions: {
            boost: { title: 2 }, // Gør titler vigtigere i søgeresultater
            fuzzy: 0.2, // Tillader stavefejl
          },
          indexContent: (page) => {
            // Filtrér så kun H2 overskrifter bliver indekseret
            return page.headers
              .filter(header => header.level === 2) // Kun H2
              .map(header => ({
                title: header.title, // Brug kun titel fra H2
                url: page.relativePath + '#' + header.slug // Generér link til H2
              }))
          }
        }
      }
    },

        
    // Topmenuen (navigation)
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Departmen',
        items: [
          { text: 'Check-in', link: '/checkin/'},
          { text: 'Gate ', link: '/gate/installation' },
          { text: 'Arrival', link: '/arrival/' },
          { text: 'OPS', link: '/ops/brug' }
        ]
      },
      {
        text: 'Language',
        items: [
          { text: 'English', link: '/en', icon: 'flag-icon flag-icon-us' },
          { text: 'Dansk', link: '/dk', icon: 'flag-icon flag-icon-dk' },
          { text: 'Deutsch', link: '/de', icon: 'flag-icon flag-icon-de' }
        ]
      },
    ],

    // Dynamisk sidebar afhængigt af hvilken side du er på
    sidebar: {
      '/checkin/': [
        {
          text: '<h4>Check In</h4>',
        },
        {
          text: 'Baggage',
          collapsed: true,
          items: [
            { text: 'Hand baggage', link: '/checkin/baggage/handbaggage.html' },
            { text: 'Checked baggage', link: '/checkin/baggage/checkedbaggage.html' },
            { text: 'Sports equipment', link: '/checkin/baggage/sports-equipment.html' },
            { text: 'Musical instruments', link: '/checkin/baggage/musical-instruments.html' }
          ]
        },
        {
          text: 'Check-in and boarding',
          collapsed: true,
          items: [
            { text: 'Check-in deadlines', link: '/checkin/check-in/index.html' },
            { text: 'Online check-in', link: '/checkin/check-in/online.html' },
            { text: 'Boarding process', link: '/checkin/boarding.html' }
          ]
        }
      ],

      '/arrival/': [
        {
          text: '<h4>Arrival</h4>',
        },
        {
          text: 'World tracer',
          collapsed: true,
          items: [
            { text: 'Creating a Delayed Report', link: '/arrival/world-tracer/creating-a-delayed-report.html' },
          ]
        },
        {
          text: 'Hotel and Transport', 
          collapsed: true,
          items: [
            { text: 'Copenhagen (CPH)', link: '/arrival/hotel-and-transport/cph.html' },
            { text: 'Ålborg (AAL)', link: '/arrival/hotel-and-transport/aal.html' },
          ]
        },

        {
          text: 'General infomation', 
          collapsed: true,
          items: [
            { text: 'Pre Check List Info', link: '/arrival/general-infomation/pre-check-list-info.html' },
            { text: 'Your passenger rights', link: '/arrival/general-infomation/your-passenger-rights.html' },
            { text: 'Rush Agreements', link: '/arrival/general-infomation/rush-agreements.html' },
          ]
        },
      ],
      '/om/': [
        {
          text: 'Om',
          items: [{ text: 'Om os', link: '/om' }]
        }
      ]
    },

    locales: {
      '/': {
        lang: 'da-DK',
        title: 'Min VitePress Site',
        description: 'Velkommen til min VitePress site!',
      },
      '/en/': {
        lang: 'en-US',
        title: 'My VitePress Site',
        description: 'Welcome to my VitePress site!',
      }
    }
  }
}
)