import React, { useState, useEffect } from 'react'
import EventsAPI from '../services/EventsAPI'
import Event from '../components/Event'
import '../css/Event.css'

const Events = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    ;(async () => {
      try {
        const allEvents = await EventsAPI.getAllEvents()
        setEvents(allEvents)
      } catch (error) {
        console.error('Error fetching events:', error)
      }
    })()
  }, [])

  return (
    <div className="all-events">
      <header>
        <h2>All Events</h2>
      </header>

      <main>
        {events.length > 0 ? (
          events.map(event => (
            <Event
              key={event.id}
              id={event.id}
              title={event.title}
              date={event.date}
              time={event.time}
              image={event.image}
            />
          ))
        ) : (
          <h2>No events available at the moment!</h2>
        )}
      </main>
    </div>
  )
}

export default Events
