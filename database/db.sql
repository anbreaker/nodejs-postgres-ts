CREATE DATABASE typescriptdatabase;

-- go to new DATABASE (pg-admin shell)
-- \c typescriptdatabase; 
CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name VARCHAR(40),
  email TEXT
);
-- list tables \dt

INSERT INTO users (name,email)
  VALUES ('anbreaker', 'anbreaker@ibm.com'),
         ('jeje', 'jeje@ibm.com'),
         ('magali', 'magali@ibm.com');

-- \d users to show table