CREATE TABLE users (
  id          SERIAL PRIMARY KEY,
  username    TEXT NOT NULL,
  password    TEXT NOT NULL
);

-- INSERT INTO users(username, password)
-- VALUES ("milad", "poop") 
-- RETURNING id;

CREATE TABLE workouts (
  id          SERIAL PRIMARY KEY,
  name        TEXT NOT NULL
  uid         INTEGER REFERENCES users (id) NOT NULL
);

-- SELECT w.name
-- FROM users u, workouts w
-- WHERE u.id = 69
-- AND u.id = w.uid

CREATE TABLE exercises (
  id        SERIAL PRIMARY KEY,
  name      TEXT NOT NULL,
  reps      INTEGER NOT NULL,
  sets      INTEGER NOT NULL,
  rest      INTEGER NOT NULL,
  wid       INTEGER REFERENCES workouts(id) NOT NULL
);
