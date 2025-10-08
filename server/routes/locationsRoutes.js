import express from 'express'
import { getLocations, getLocationById } from '../controllers/locationsController.js'

const router = express.Router()

// GET all locations
router.get('/', getLocations)

// GET single location by ID
router.get('/:id', getLocationById)

export default router
