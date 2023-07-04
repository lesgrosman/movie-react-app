export const clickListItem = (itemType: string, title: string) => {
  if (typeof window !== 'undefined' && window?.dataLayer) {
    window?.gtag('event', `click_${itemType}`, {
      event_category: 'Engagement',
      event_label: 'Item Click',
      title,
    })
  }
}

export const searchMovie = (query: string) => {
  if (typeof window !== 'undefined' && window?.dataLayer) {
    window?.gtag('event', 'search_submit', {
      event_category: 'Engagement',
      event_label: 'Search',
      query,
    })
  }
}
