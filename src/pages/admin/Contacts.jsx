import { useState, useEffect } from 'react';
import { contactService } from '../../services/api';
import './Contacts.css';

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedContact, setSelectedContact] = useState(null);
  const [statusFilter, setStatusFilter] = useState('all');

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const response = await contactService.getAllContacts();
      if (response.success) {
        setContacts(response.data?.data || []);
      }
    } catch (err) {
      setError('Failed to load contacts');
      console.error('Error fetching contacts:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (id, newStatus) => {
    try {
      await contactService.updateContact(id, { status: newStatus });
      fetchContacts();
    } catch (err) {
      setError('Failed to update contact status');
      console.error('Error updating contact:', err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      try {
        await contactService.deleteContact(id);
        fetchContacts();
      } catch (err) {
        setError('Failed to delete contact');
        console.error('Error deleting contact:', err);
      }
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return '#f59e0b';
      case 'read': return '#3b82f6';
      case 'replied': return '#10b981';
      default: return '#6b7280';
    }
  };

  const filteredContacts = statusFilter === 'all' 
    ? contacts 
    : contacts.filter(contact => contact.status === statusFilter);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="contacts-admin">
        <div className="loading">Loading contacts...</div>
      </div>
    );
  }

  return (
    <div className="contacts-admin">
      <div className="contacts-header">
        <h1>Contacts Management</h1>
        <div className="contacts-stats">
          <span>Total: {contacts.length}</span>
          <span>Pending: {contacts.filter(c => c.status === 'pending').length}</span>
          <span>Read: {contacts.filter(c => c.status === 'read').length}</span>
          <span>Replied: {contacts.filter(c => c.status === 'replied').length}</span>
        </div>
      </div>

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      {/* Filter */}
      <div className="filter-section">
        <select 
          value={statusFilter} 
          onChange={(e) => setStatusFilter(e.target.value)}
          className="status-filter"
        >
          <option value="all">All Status</option>
          <option value="pending">Pending</option>
          <option value="read">Read</option>
          <option value="replied">Replied</option>
        </select>
      </div>

      {/* Contacts List */}
      <div className="contacts-list">
        {filteredContacts.map((contact) => (
          <div key={contact.id} className="contact-card">
            <div className="contact-header">
              <div className="contact-info">
                <h3>{contact.name}</h3>
                <p className="contact-email">{contact.email}</p>
                <p className="contact-subject">{contact.subject}</p>
              </div>
              <div className="contact-meta">
                <span className="contact-date">
                  {formatDate(contact.created_at)}
                </span>
                <span 
                  className="status-badge"
                  style={{ backgroundColor: getStatusColor(contact.status) }}
                >
                  {contact.status}
                </span>
              </div>
            </div>

            <div className="contact-message">
              <p>{contact.message}</p>
            </div>

            <div className="contact-actions">
              <button 
                onClick={() => setSelectedContact(contact)}
                className="btn btn-secondary"
              >
                View Details
              </button>
              
              <select 
                value={contact.status}
                onChange={(e) => handleStatusUpdate(contact.id, e.target.value)}
                className="status-select"
              >
                <option value="pending">Pending</option>
                <option value="read">Read</option>
                <option value="replied">Replied</option>
              </select>

              <button 
                onClick={() => handleDelete(contact.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredContacts.length === 0 && !loading && (
        <div className="empty-state">
          <p>No contacts found.</p>
        </div>
      )}

      {/* Contact Detail Modal */}
      {selectedContact && (
        <div className="contact-modal">
          <div className="contact-detail">
            <div className="modal-header">
              <h2>Contact Details</h2>
              <button 
                onClick={() => setSelectedContact(null)}
                className="close-btn"
              >
                ✕
              </button>
            </div>
            
            <div className="contact-detail-content">
              <div className="detail-row">
                <label>Name:</label>
                <span>{selectedContact.name}</span>
              </div>
              
              <div className="detail-row">
                <label>Email:</label>
                <span>{selectedContact.email}</span>
              </div>
              
              <div className="detail-row">
                <label>Subject:</label>
                <span>{selectedContact.subject}</span>
              </div>
              
              <div className="detail-row">
                <label>Status:</label>
                <span 
                  className="status-badge"
                  style={{ backgroundColor: getStatusColor(selectedContact.status) }}
                >
                  {selectedContact.status}
                </span>
              </div>
              
              <div className="detail-row">
                <label>Date:</label>
                <span>{formatDate(selectedContact.created_at)}</span>
              </div>
              
              <div className="detail-row">
                <label>Message:</label>
                <div className="message-content">
                  {selectedContact.message}
                </div>
              </div>
            </div>

            <div className="modal-actions">
              <select 
                value={selectedContact.status}
                onChange={(e) => {
                  handleStatusUpdate(selectedContact.id, e.target.value);
                  setSelectedContact({...selectedContact, status: e.target.value});
                }}
                className="status-select"
              >
                <option value="pending">Pending</option>
                <option value="read">Read</option>
                <option value="replied">Replied</option>
              </select>
              
              <button 
                onClick={() => setSelectedContact(null)}
                className="btn btn-secondary"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contacts;
