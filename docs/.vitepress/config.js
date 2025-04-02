export default {
  title: 'Norwigien', // Tittel på din side
  description: 'Velkommen til min Document site!',
  themeConfig: {
    search: {
      provider: 'local',
    },
    // Topmenuen (navigation)
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Departmen',
        items: [
          { text: 'Check-in', link: '/checkin/' },
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
          text: '<i>Check In</i>',
        },
        {
          text: 'Baggage',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Hand baggage', link: '/checkin/baggage/handbaggage/' },
            { text: 'Checked baggage', link: '/checkin/baggage/checkedbaggage/' },
            { text: 'Sports equipment', link: '/checkin/baggage/sports-equipment/' },
            { text: 'Musical instruments', link: '/checkin/baggage/musical-instruments/' }
          ]
        },
        {
          text: 'Check-in and boarding',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Check-in deadlines', link: '/checkin/check-in/index/' },
            { text: 'Online check-in', link: '/checkin/check-in/online/' },
            { text: 'Boarding process', link: '/checkin/boarding/' }
          ]
        }
      ],

      '/arrival/': [
        {
          text: '<i>Arrival</i>',
        },
        {
          text: 'World tracer',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Creating a Delayed Report', link: '/arrival/world-tracer/creating-a-delayed-report/' },
            { text: 'pre-check-list-info', link: '/arrival/check-in/pre-check-list-info/' },
            { text: 'Boarding process', link: '/checkin/boarding/' }
          ]
        },
        { text: 'Pre Check List Info', link: '/arrival/pre-check-list-info/' }
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
