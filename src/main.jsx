import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import ErrorPage from './pages/ErrorPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PortfolioPage from './pages/PortfolioPage';
import ResumePage from './pages/ResumePage';
import './index.css';

// defining routes and which pages respond to each url
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
          { 
            index: true,
            element: <AboutPage />
          },
          {
            path: 'about',
            element: <AboutPage />
          },
          {
            path: 'contact',
            element: <ContactPage />
          },
          {
            path: 'portfolio',
            element: <PortfolioPage />
          },
          {
            path: 'resume',
            element: <ResumePage />
          },
        ],
    },
]);

// Rendering the RouteProvider
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);