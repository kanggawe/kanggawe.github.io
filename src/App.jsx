import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';
import CustomerPortal from './pages/CustomerPortal';
import Legal from './pages/Legal';
import NotFound from './pages/NotFound';
// import Preloader from './components/Preloader';

// Error Boundary Component
const ErrorBoundary = () => {
  return (
    <div style={{
      padding: '2rem',
      textAlign: 'center',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#f8fafc'
    }}>
      <h1 style={{ color: '#1e293b', marginBottom: '1rem' }}>Oops! Something went wrong</h1>
      <p style={{ color: '#64748b', marginBottom: '2rem' }}>
        The page you're looking for doesn't exist or there was an error.
      </p>
      <button
        onClick={() => window.location.href = '/'}
        style={{
          padding: '12px 24px',
          background: '#0047CC',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '1rem',
          fontWeight: '600'
        }}
      >
        Go Home
      </button>
    </div>
  );
};

// Create router configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'services',
        element: <Services />
      },
      {
        path: 'blog',
        element: <Blog />
      },
      {
        path: 'blog/:slug',
        element: <BlogDetail />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'portal',
        element: <CustomerPortal />
      },
      {
        path: 'portal-pelanggan',
        element: <CustomerPortal />
      },
      {
        path: 'legal',
        element: <Legal />
      },
      {
        path: 'privacy-policy',
        element: <Legal />
      },
      {
        path: 'sla',
        element: <Legal />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
]);

function App() {
  return (
    <ThemeProvider>
      {/* <Preloader /> */}
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
