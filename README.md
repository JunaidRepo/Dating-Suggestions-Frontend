Dating Suggestions (Frontend)

This is the frontend for the Dating Suggestions application, built using React. It provides a user-friendly interface to interact with the backend services, allowing users to explore, filter, and manage dating suggestions effectively.

Features

View All Suggestions: Displays a list of dating suggestions fetched from the backend.

Add Suggestions: Users can add new ideas with relevant details.

Update Suggestions: Modify existing dating ideas as needed.

Delete Suggestions: Remove outdated or unwanted suggestions.

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

