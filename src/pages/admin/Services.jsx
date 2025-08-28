import { useState, useEffect } from 'react';
import { serviceService } from '../../services/api';
import './Services.css';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingService, setEditingService] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    icon: 'fas fa-cog',
    price: '',
    status: 'active'
  });

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      setLoading(true);
      const response = await serviceService.getAllServices();
      if (response.success) {
        setServices(response.data?.data || []);
      }
    } catch (err) {
      setError('Failed to load services');
      console.error('Error fetching services:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingService) {
        await serviceService.updateService(editingService.id, formData);
      } else {
        await serviceService.createService(formData);
      }
      fetchServices();
      resetForm();
    } catch (err) {
      setError('Failed to save service');
      console.error('Error saving service:', err);
    }
  };

  const handleEdit = (service) => {
    setEditingService(service);
    setFormData({
      title: service.title,
      description: service.description,
      icon: service.icon || 'fas fa-cog',
      price: service.price || '',
      status: service.status
    });
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      try {
        await serviceService.deleteService(id);
        fetchServices();
      } catch (err) {
        setError('Failed to delete service');
        console.error('Error deleting service:', err);
      }
    }
  };

  const handleToggleStatus = async (id) => {
    try {
      await serviceService.toggleServiceStatus(id);
      fetchServices();
    } catch (err) {
      setError('Failed to toggle service status');
      console.error('Error toggling status:', err);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      icon: 'fas fa-cog',
      price: '',
      status: 'active'
    });
    setEditingService(null);
    setShowForm(false);
  };

  if (loading) {
    return (
      <div className="services-admin">
        <div className="loading">Loading services...</div>
      </div>
    );
  }

  return (
    <div className="services-admin">
      <div className="services-header">
        <h1>Services Management</h1>
        <button 
          onClick={() => setShowForm(true)}
          className="btn btn-primary"
        >
          Add New Service
        </button>
      </div>

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      {/* Service Form */}
      {showForm && (
        <div className="service-form-modal">
          <div className="service-form">
            <div className="form-header">
              <h2>{editingService ? 'Edit Service' : 'Add New Service'}</h2>
              <button onClick={resetForm} className="close-btn">✕</button>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  required
                />
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  required
                  rows="3"
                />
              </div>

              <div className="form-group">
                <label>Icon (FontAwesome class)</label>
                <input
                  type="text"
                  value={formData.icon}
                  onChange={(e) => setFormData({...formData, icon: e.target.value})}
                  placeholder="fas fa-cog"
                />
              </div>

              <div className="form-group">
                <label>Price</label>
                <input
                  type="number"
                  step="0.01"
                  value={formData.price}
                  onChange={(e) => setFormData({...formData, price: e.target.value})}
                  placeholder="0.00"
                />
              </div>

              <div className="form-group">
                <label>Status</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({...formData, status: e.target.value})}
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>

              <div className="form-actions">
                <button type="submit" className="btn btn-primary">
                  {editingService ? 'Update Service' : 'Create Service'}
                </button>
                <button type="button" onClick={resetForm} className="btn btn-secondary">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Services List */}
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-header">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <div className="service-status">
                <span className={`status-badge ${service.status}`}>
                  {service.status}
                </span>
              </div>
            </div>
            
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              {service.price && (
                <div className="service-price">
                  <span className="price">${service.price}</span>
                </div>
              )}
            </div>

            <div className="service-actions">
              <button 
                onClick={() => handleEdit(service)}
                className="btn btn-secondary"
              >
                Edit
              </button>
              <button 
                onClick={() => handleToggleStatus(service.id)}
                className={`btn ${service.status === 'active' ? 'btn-warning' : 'btn-success'}`}
              >
                {service.status === 'active' ? 'Deactivate' : 'Activate'}
              </button>
              <button 
                onClick={() => handleDelete(service.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {services.length === 0 && !loading && (
        <div className="empty-state">
          <p>No services found. Create your first service!</p>
        </div>
      )}
    </div>
  );
};

export default Services;
