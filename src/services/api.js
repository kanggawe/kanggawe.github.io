const API_BASE_URL = 'http://localhost:8000/api';

// Helper function untuk membuat request
const makeRequest = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  // Add auth token if available
  const token = localStorage.getItem('auth_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await fetch(url, config);
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }
    
    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Auth Services
export const authService = {
  login: async (credentials) => {
    const response = await makeRequest('/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
    
    if (response.success && response.data.token) {
      localStorage.setItem('auth_token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
    }
    
    return response;
  },

  register: async (userData) => {
    const response = await makeRequest('/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
    
    if (response.success && response.data.token) {
      localStorage.setItem('auth_token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
    }
    
    return response;
  },

  logout: async () => {
    try {
      await makeRequest('/logout', { method: 'POST' });
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      localStorage.removeItem('auth_token');
      localStorage.removeItem('user');
    }
  },

  getCurrentUser: async () => {
    return await makeRequest('/user');
  },

  isAuthenticated: () => {
    return !!localStorage.getItem('auth_token');
  },

  getToken: () => {
    return localStorage.getItem('auth_token');
  },

  getUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },
};

// Contact Services
export const contactService = {
  submitContact: async (contactData) => {
    return await makeRequest('/contacts', {
      method: 'POST',
      body: JSON.stringify(contactData),
    });
  },

  getAllContacts: async () => {
    return await makeRequest('/contacts');
  },

  getContactById: async (id) => {
    return await makeRequest(`/contacts/${id}`);
  },

  updateContact: async (id, contactData) => {
    return await makeRequest(`/contacts/${id}`, {
      method: 'PUT',
      body: JSON.stringify(contactData),
    });
  },

  deleteContact: async (id) => {
    return await makeRequest(`/contacts/${id}`, {
      method: 'DELETE',
    });
  },

  getContactsByStatus: async (status) => {
    return await makeRequest(`/contacts/status/${status}`);
  },
};

// Service Services
export const serviceService = {
  getActiveServices: async () => {
    return await makeRequest('/services/active');
  },

  getAllServices: async () => {
    return await makeRequest('/services');
  },

  getServiceById: async (id) => {
    return await makeRequest(`/services/${id}`);
  },

  createService: async (serviceData) => {
    return await makeRequest('/services', {
      method: 'POST',
      body: JSON.stringify(serviceData),
    });
  },

  updateService: async (id, serviceData) => {
    return await makeRequest(`/services/${id}`, {
      method: 'PUT',
      body: JSON.stringify(serviceData),
    });
  },

  deleteService: async (id) => {
    return await makeRequest(`/services/${id}`, {
      method: 'DELETE',
    });
  },

  toggleServiceStatus: async (id) => {
    return await makeRequest(`/services/${id}/toggle-status`, {
      method: 'PATCH',
    });
  },
};
