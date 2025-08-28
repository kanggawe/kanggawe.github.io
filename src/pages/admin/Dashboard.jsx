import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { serviceService, contactService } from '../../services/api';
import './Dashboard.css';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalServices: 0,
    activeServices: 0,
    totalContacts: 0,
    pendingContacts: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [servicesResponse, contactsResponse] = await Promise.all([
          serviceService.getAllServices(),
          contactService.getAllContacts()
        ]);

        const services = servicesResponse.data?.data || [];
        const contacts = contactsResponse.data?.data || [];

        setStats({
          totalServices: services.length,
          activeServices: services.filter(s => s.status === 'active').length,
          totalContacts: contacts.length,
          pendingContacts: contacts.filter(c => c.status === 'pending').length
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="dashboard">
        <div className="loading">Loading dashboard...</div>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard Overview</h1>
        <p>Welcome to your admin dashboard</p>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">🛠️</div>
          <div className="stat-content">
            <h3>Total Services</h3>
            <p className="stat-number">{stats.totalServices}</p>
            <p className="stat-label">Services in database</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">✅</div>
          <div className="stat-content">
            <h3>Active Services</h3>
            <p className="stat-number">{stats.activeServices}</p>
            <p className="stat-label">Currently active</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📧</div>
          <div className="stat-content">
            <h3>Total Contacts</h3>
            <p className="stat-number">{stats.totalContacts}</p>
            <p className="stat-label">Contact submissions</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">⏳</div>
          <div className="stat-content">
            <h3>Pending Contacts</h3>
            <p className="stat-number">{stats.pendingContacts}</p>
            <p className="stat-label">Awaiting response</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        <h2>Quick Actions</h2>
        <div className="actions-grid">
          <Link to="/admin/services" className="action-card">
            <div className="action-icon">➕</div>
            <h3>Add New Service</h3>
            <p>Create a new service offering</p>
          </Link>

          <Link to="/admin/contacts" className="action-card">
            <div className="action-icon">📋</div>
            <h3>View Contacts</h3>
            <p>Manage contact submissions</p>
          </Link>

          <Link to="/admin/services" className="action-card">
            <div className="action-icon">⚙️</div>
            <h3>Manage Services</h3>
            <p>Edit existing services</p>
          </Link>

          <Link to="/" className="action-card">
            <div className="action-icon">👁️</div>
            <h3>View Site</h3>
            <p>Preview your website</p>
          </Link>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="recent-activity">
        <h2>Recent Activity</h2>
        <div className="activity-list">
          <div className="activity-item">
            <div className="activity-icon">📊</div>
            <div className="activity-content">
              <p>Dashboard loaded successfully</p>
              <span className="activity-time">Just now</span>
            </div>
          </div>
          <div className="activity-item">
            <div className="activity-icon">🔐</div>
            <div className="activity-content">
              <p>Admin logged in</p>
              <span className="activity-time">Just now</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
