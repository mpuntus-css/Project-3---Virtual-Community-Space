const API_URL = '/api/locations'

const LocationsAPI = {
  // Get all locations
  getAllLocations: async () => {
    try {
      const response = await fetch(API_URL)
      if (!response.ok) throw new Error('Failed to fetch locations')
      return await response.json()
    } catch (error) {
      console.error(error)
      return []
    }
  },

  // Get location by ID
  getLocationById: async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`)
      if (!response.ok) throw new Error('Failed to fetch location')
      return await response.json()
    } catch (error) {
      console.error(error)
      return null
    }
  }
}

export default LocationsAPI
