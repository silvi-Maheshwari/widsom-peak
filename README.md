# User Management Application

## Overview
This project is a **User Management Application** built with **React.js**. It allows users to:
- View a list of users fetched from an external API.
- Search for users by name.
- Sort users alphabetically (A-Z or Z-A).
- View detailed information about a selected user on a separate page.
- Toggle between Dark Mode and Light Mode.

The application is fully responsive, providing a seamless experience across mobile and desktop devices.

---

## Features

### 1. Home Page
- Displays a list of users fetched from the **JSONPlaceholder API**.
- Each user card shows:
  - Name
  - Email
  - City
- Functionalities include:
  - **Search**: Filter users by name.
  - **Sort**: Sort users alphabetically (A-Z, Z-A).
  - **Navigation**: Click a user card to navigate to their detail page.

### 2. User Detail Page
- Displays full details of a selected user:
  - Name
  - Email
  - Phone
  - Company Name
  - Website
- Includes a "Go Back" button to return to the home page.

### 3. Dark Mode/Light Mode
- A toggle button allows users to switch between Dark Mode and Light Mode.
- Theme preference is saved using **localStorage** and persists across sessions.

### 4. Responsive Design
- The UI is fully responsive and adapts to different screen sizes.

---

## Technologies Used

### Frontend
- **React.js**: Functional components and hooks.
- **React Router**: For navigation between pages.
- **CSS**: For styling (no external libraries like Tailwind or Material-UI).

### API
- **JSONPlaceholder**: A free fake REST API for testing and prototyping.
  - Endpoint used: [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)

---

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd wisdom-peak-analytics
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit:
   ```
   http://localhost:5173
   ```

---

## Folder Structure
```
src/
├── components/
│   ├── Home.js        // Home page with user list
│   ├── UserDetail.js  // User detail page
├── App.js             // Main app component
├── App.css            // Global styles and themes
├── main.jsx           // Application entry point
```

---

## Deployment
The project is deployed on **Netlify**:
- Live Demo: https://wisdom-peak-analytics.netlify.app/

---

## API Reference
**JSONPlaceholder** API is used to fetch user data:
- Endpoint: [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)

Example Response:
```json
[
  {
    "id": 1,
    "name": "Leanne Graham",
    "email": "Sincere@april.biz",
    "address": {
      "city": "Gwenborough"
    },
    "phone": "1-770-736-8031 x56442",
    "company": {
      "name": "Romaguera-Crona"
    },
    "website": "hildegard.org"
  }
]
```

---

## Features Implemented
- Fetch user data from API.
- Search and sorting functionality.
- Responsive design with CSS Grid.
- Dark Mode and Light Mode toggle.
- Routing using React Router.

---

## Future Improvements
- Add pagination to the user list.
- Implement user authentication (login/signup).
- Improve accessibility (ARIA labels, keyboard navigation).

---


