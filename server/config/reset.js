import { pool } from './database.js';

const createTables = async () => {
  await pool.query(`
    DROP TABLE IF EXISTS events;
    DROP TABLE IF EXISTS locations;

    CREATE TABLE locations (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100),
      address VARCHAR(200),
      city VARCHAR(100),
      state VARCHAR(50),
      zip VARCHAR(20),
      image VARCHAR(255)
    );

    CREATE TABLE events (
      id SERIAL PRIMARY KEY,
      title VARCHAR(150),
      date DATE,
      time TIME,
      image VARCHAR(255),
      location_id INTEGER REFERENCES locations(id)
    );
  `)

  await pool.query(`
    INSERT INTO locations (name, address, city, state, zip, image)
    VALUES
      ('Echo Lounge', '123 Echo St', 'Dallas', 'TX', '75001', 'https://picsum.photos/200?random=1'),
      ('House of Blues', '456 Harmony Ave', 'Dallas', 'TX', '75002', 'https://picsum.photos/200?random=2'),
      ('Pavilion', '789 Music Ln', 'Dallas', 'TX', '75003', 'https://picsum.photos/200?random=3'),
      ('American Airlines Center', '2500 Victory Ave', 'Dallas', 'TX', '75004', 'https://picsum.photos/200?random=4');
  `)

  await pool.query(`
    INSERT INTO events (title, date, time, image, location_id)
    VALUES
      ('Rock Night', '2025-11-12', '19:00', 'https://picsum.photos/300?random=10', 1),
      ('Jazz Festival', '2025-12-01', '20:30', 'https://picsum.photos/300?random=11', 1),
      ('Blues Bash', '2025-10-25', '18:00', 'https://picsum.photos/300?random=12', 2),
      ('Acoustic Evening', '2025-10-30', '21:00', 'https://picsum.photos/300?random=13', 3),
      ('Pop Extravaganza', '2025-12-05', '20:00', 'https://picsum.photos/300?random=14', 4);
  `)

  console.log('✅ Tables created & data inserted!')
  pool.end()
}

createTables();