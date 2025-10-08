import express from 'express'
import { getEvents, getEventById } from '../controllers/eventsController.js'

const router = express.Router()

// GET all events
router.get('/', getEvents)

// GET single event by ID
router.get('/:id', getEventById)

export default router
