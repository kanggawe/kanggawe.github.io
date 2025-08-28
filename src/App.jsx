import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import RootLayout from './layouts/RootLayout';
import AdminLayout from './layouts/AdminLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Dashboard from './pages/admin/Dashboard';
import AdminServices from './pages/admin/Services';
import AdminContacts from './pages/admin/Contacts';

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
          background: '#667eea',
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

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('auth_token');
  return token ? children : <Navigate to="/login" replace />;
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
        path: 'contact',
        element: <Contact />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <ErrorBoundary />
  },
  {
    path: '/admin',
    element: (
      <ProtectedRoute>
        <AdminLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Navigate to="/admin/dashboard" replace />
      },
      {
        path: 'dashboard',
        element: <Dashboard />
      },
      {
        path: 'services',
        element: <AdminServices />
      },
      {
        path: 'contacts',
        element: <AdminContacts />
      }
    ]
  },
  {
    path: '*',
    element: <ErrorBoundary />
  }
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
