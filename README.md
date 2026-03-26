Project Name

HERO.IO – App Store Web Application

Project Overview

This project is a React-based App Store UI where users can:
Browse applications
View app details
Install apps (stored in localStorage)
View installed apps
Uninstall apps
Sort installed apps


The project simulates a real mobile app marketplace experience using frontend technologies.

Core Features:

1. Routing System
Implemented using react-router
Includes:
Home Page
Apps Page
Installation Page
App Details Page
Error Page

2. Data Handling
Static JSON (appData.json)
Loaded via route loader
Used across multiple pages

3. Installation System
Apps are “installed” using localStorage
Only app IDs are stored
UI updates dynamically

4. Installed Apps Page

Users can:

See all installed apps
Uninstall apps
Sort apps (by size)

5. Sorting Feature
Dropdown implemented
Supports:
Small → Large
Large → Small

6. Notification System
Used react-hot-toast
Shows feedback on uninstall

7. UI Design
Tailwind CSS + DaisyUI
Responsive layout
Reusable gradient styles

Project Summary (for README)

This project is a fully functional frontend App Store built using React and Tailwind CSS. It demonstrates key frontend concepts such as routing, state management, localStorage persistence, conditional rendering, and dynamic UI updates. Users can explore apps, install, and manage installed apps with sorting and real-time UI feedback.
