export const clickListItem = (itemType: string, title: string) => {
  if (typeof window !== 'undefined' && window?.dataLayer) {
    window?.gtag('event', `click_${itemType}`, {
      event_category: 'Engagement',
      event_label: 'Item Click',
      title,
    })
  }
}

export const clickPerson = (name: string) => {
  if (typeof window !== 'undefined' && window?.dataLayer) {
    window?.gtag('event', 'click_person', {
      event_category: 'Engagement',
      event_label: 'Person Click',
      name,
    })
  }
}

export const searchSubmit = (query: string) => {
  if (typeof window !== 'undefined' && window?.dataLayer) {
    window?.gtag('event', 'search_submit', {
      event_category: 'Engagement',
      event_label: 'Search',
      query,
    })
  }
}
