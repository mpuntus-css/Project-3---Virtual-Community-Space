const API_URL = '/api/events'

const EventsAPI = {
  // Get all events
  getAllEvents: async () => {
    try {
      const response = await fetch(API_URL)
      if (!response.ok) throw new Error('Failed to fetch events')
      return await response.json()
    } catch (error) {
      console.error(error)
      return []
    }
  },

  // Get event by ID
  getEventsById: async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`)
      if (!response.ok) throw new Error('Failed to fetch event')
      return await response.json()
    } catch (error) {
      console.error(error)
      return null
    }
  }
}

export default EventsAPI
