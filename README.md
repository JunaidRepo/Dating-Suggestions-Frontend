Dating Suggestions (Frontend)

This is the frontend for the Dating Suggestions application, built using React. It provides a user-friendly interface to interact with the backend services, allowing users to explore, filter, and manage dating suggestions effectively.

Features

🏠 Home Page – Displays a list of dating suggestions.

🔍 Search & Filter – Allows users to filter suggestions based on preferences.

📝 Update Profile – Users can update their name, age, gender, and interests.

➕ Add New Suggestions – Functionality to add new suggestions.

❌ Delete Suggestions – Users can remove unwanted suggestions.

🔄 Dynamic UI Updates – State management ensures smooth interaction without refreshing the page.

Technologies Used

React (Frontend Framework)

Axios (For API Requests)

Tailwind CSS (For Styling)

React Hooks (useState, useEffect for state management)

Installation & Setup

Prerequisites

Ensure you have Node.js and npm installed.

Steps to Run the Project

Clone the Repository

git clone https://github.com/your-repo-link.git
cd Dating-Suggestions-Frontend

Install Dependencies

npm install

Start the Development Server

npm run dev

Open http://localhost:5173/ in your browser.

API Endpoints

This frontend communicates with the Spring Boot backend using the following API endpoints:

GET /suggestions – Fetch all dating suggestions.

POST /suggestions – Add a new suggestion.

PUT /update – Update user details.

DELETE /delete/{id} – Remove a suggestion.

Folder Structure

Dating-Suggestions-Frontend/
│-- src/
│   │-- components/   # Reusable UI components
│   │-- pages/        # Main pages like Home, Profile
│   │-- services/     # API calls using Axios
│   │-- App.js        # Main app component
│   │-- index.js      # Entry point
│-- public/
│-- package.json     # Dependencies and scripts
│-- tailwind.config.js # Tailwind setup


API Not Responding: Ensure the backend is running at http://localhost:8080.

