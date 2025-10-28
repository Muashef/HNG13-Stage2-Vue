## TicketZen
A ticket management application built with Vue + vite as part of a hackathon Stage 2 challenge. 

## Overview
Implementation includes:
- Landing page with hero section and feature highlights
- User authentication (signup/login)
- Complete ticket management system (CRUD operations)
- Real-time statistics dashboard
- Responsive design with Tailwind CSS
- localStorage-based data persistence

## Features

### Authentication
- User signup with email and password validation
- Secure login with session management
- Password validation (minimum 6 characters)
- Email format validation

### Ticket Management
- **Create** - Add new tickets with title, description, priority, and status
- **Read** - View all tickets with filtering by status
- **Update** - Edit existing ticket details
- **Delete** - Remove tickets from the system
- **Filter** - View tickets by status (Open, In Progress, Closed)

### Dashboard
- Total ticket count
- Open tickets count
- In-progress tickets count
- Closed tickets count
- Quick ticket creation form
- Ticket list with edit/delete actions

### Design
- Modern dark theme with cyan and blue accents
- Animated hero section with wavy background
- Decorative circular elements
- Smooth transitions and hover effects
- Fully responsive (mobile, tablet, desktop)
- Max-width 1440px container

## Tech Stack

### Vue
- **Framework**: Vue 3
- **Build Tool**: Vite
- **Routing**: Vue Router v4
- **Styling**: Tailwind CSS
- **State Management**: Composition API with ref/reactive
- **Validation**: Schema-based validation


## Project Structure

\`\`\`
.
├── src/                          # Vue.js version (current)
│   ├── main.js
│   ├── App.vue
│   ├── index.css
│   ├── router/
│   │   └── index.js
│   ├── pages/
│   │   ├── Landing.vue
│   │   ├── Login.vue
│   │   ├── Signup.vue
│   │   └── Dashboard.vue
│   ├── components/
│   │   ├── TicketForm.vue
│   │   ├── TicketList.vue
│   │   └── TicketStats.vue
│   └── utils/
│       ├── storage.js
│       └── validation.js
│
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
\`\`\`

## Setup Instructions

**Installation:**
 - clone https://github.com/Muashef/HNG13-Stage2-Vue.git
 - npm install
 - npm run dev

**Access:**
- Open `http://localhost:5173` in your browser
