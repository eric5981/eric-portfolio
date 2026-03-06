import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Profile from './Profile.jsx'
import Experience from './Experience.jsx'
import Skills from './Skills.jsx'
import Projects from './Projects.jsx'
import Education from './Education.jsx'
import Dashboard from './Dashboard.jsx'
import About from './About.jsx'
import NotFound from './NotFound.jsx'
import PageTransition from './PageTransition.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageTransition><Profile /></PageTransition>,
  },
  {
    path: '/experience',
    element: <PageTransition><Experience /></PageTransition>,
  },
  {
    path: '/skills',
    element: <PageTransition><Skills /></PageTransition>,
  },
  {
    path: '/projects',
    element: <PageTransition><Projects /></PageTransition>,
  },
  {
    path: '/education',
    element: <PageTransition><Education /></PageTransition>,
  },
  {
    path: '/demo',
    element: <PageTransition><App /></PageTransition>,
  },
  {
    path: '/dashboard',
    element: <PageTransition><Dashboard /></PageTransition>,
  },
  {
    path: '/about',
    element: <PageTransition><About /></PageTransition>,
  },
  {
    path: '*',
    element: <PageTransition><NotFound /></PageTransition>,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Analytics />
  </StrictMode>,
)
