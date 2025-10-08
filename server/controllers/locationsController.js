import { pool } from '../config/database.js'

// Get all locations
export const getLocations = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM locations ORDER BY name ASC')
    res.status(200).json(result.rows)
  } catch (error) {
    console.error('❌ Error fetching locations:', error)
    res.status(500).json({ error: 'Failed to fetch locations' })
  }
}

// Get a single location by ID
export const getLocationById = async (req, res) => {
  const { id } = req.params
  try {
    const result = await pool.query('SELECT * FROM locations WHERE id = $1', [id])
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Location not found' })
    }
    res.status(200).json(result.rows[0])
  } catch (error) {
    console.error('❌ Error fetching location by ID:', error)
    res.status(500).json({ error: 'Failed to fetch location' })
  }
}
