import { useState } from 'react';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './AdminLayout.css';

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className={`admin-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2>Admin Panel</h2>
          <button 
            className="sidebar-toggle"
            onClick={() => setSidebarOpen(false)}
          >
            ✕
          </button>
        </div>

        <nav className="sidebar-nav">
          <ul>
            <li>
              <Link 
                to="/admin/dashboard" 
                className={isActive('/admin/dashboard') ? 'active' : ''}
                onClick={() => setSidebarOpen(false)}
              >
                📊 Dashboard
              </Link>
            </li>
            <li>
              <Link 
                to="/admin/services" 
                className={isActive('/admin/services') ? 'active' : ''}
                onClick={() => setSidebarOpen(false)}
              >
                🛠️ Services
              </Link>
            </li>
            <li>
              <Link 
                to="/admin/contacts" 
                className={isActive('/admin/contacts') ? 'active' : ''}
                onClick={() => setSidebarOpen(false)}
              >
                📧 Contacts
              </Link>
            </li>
            <li>
              <Link 
                to="/" 
                onClick={() => setSidebarOpen(false)}
              >
                🏠 Back to Site
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="admin-main">
        {/* Header */}
        <header className="admin-header">
          <button 
            className="mobile-menu-btn"
            onClick={() => setSidebarOpen(true)}
          >
            ☰
          </button>
          
          <div className="header-content">
            <h1>Admin Dashboard</h1>
            <div className="user-menu">
              <span>Welcome, {user?.name}</span>
              <button onClick={handleLogout} className="btn btn-secondary">
                Logout
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="admin-content">
          <Outlet />
        </main>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default AdminLayout;
