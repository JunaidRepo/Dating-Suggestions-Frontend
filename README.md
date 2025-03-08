Dating Suggestions (Frontend)

This is the frontend for the Dating Suggestions application, built using React. It provides a user-friendly interface to interact with the backend services, allowing users to explore, filter, and manage dating suggestions effectively.

Features

Displays all the users fetched from the backend.

we can add new users

update exesting user details

delete the user

Responsive Design: Ensures optimal experience across devices.

Technologies Used

React (Frontend Framework)

Axios (For API Requests)

Tailwind CSS (For Styling)

React Hooks (useState, useEffect for state management)

API Endpoints

This frontend communicates with the Spring Boot backend using the following API endpoints:

GET /getAll – Fetch all user details.

GET/ match - to find the bast match

POST / – Add a new user details.

PUT /update – Update user details.

DELETE /delete/{id} – Remove user details.

Folder Structure

Dating-Suggestions-Frontend/
│-- src/
│   │-- components/   # Reusable UI components
│   │-- services/     # API calls using Axios
│   │-- App.js        # Main app component
│   │-- index.js      # Entry point
│-- public/
│-- package.json     # Dependencies and scripts
│-- tailwind.config.js # Tailwind setup


API Not Responding: Ensure the backend is running at http://localhost:8080.

