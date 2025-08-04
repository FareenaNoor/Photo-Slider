# React Photo Gallery (Vite + HMR)

This is a minimal React Photo Gallery app built with **[Vite](https://vitejs.dev/)** for fast development, including support for Hot Module Replacement (HMR), and basic ESLint setup.

You can upload, view, and navigate between photos with features like:
- Next / Previous image navigation
- Deleting images
- Uploading new images from your computer
- Fullscreen image preview on thumbnail click

## 🔧 Tech Stack

- ⚡ Vite
- ⚛️ React
- 🧠 useState, useRef
- 🔁 Hot Module Replacement (HMR)
- ✅ ESLint support

## 📦 Installation & Setup

First, clone the repository:

```bash```
git clone https://github.com/your-username/your-repo-name.git

```bash```
cd your-repo-name

Then install dependencies:

```bash```
npm install

To run the app locally in development mode:

```bash```
npm run dev

This will start the development server (usually on http://localhost:5173/) with hot-reloading.

📄 Available Scripts
Script	Description
npm install	Install project dependencies
npm run dev	Start local dev server with HMR
npm run build	Build for production
npm run lint	Run ESLint on project files
npm run preview	Preview production build locally

📁 Project Structure
bash
Copy
Edit
src/
├── assets/           # Image files
├── App.jsx           # Main App component
├── PhotoGallery.jsx  # Core logic for gallery
├── App.css           # Styling
└── main.jsx          # Entry point
🔌 Plugins Used
This template supports two official Vite plugins for React:

@vitejs/plugin-react: uses Babel and Fast Refresh (default)

@vitejs/plugin-react-swc: uses SWC for better performance

⚠️ Make sure only one is installed at a time. This template uses @vitejs/plugin-react.
