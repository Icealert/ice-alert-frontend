import axios from 'axios';

// Create axios instance with default config
const api = axios.create({
  baseURL: 'https://ice-alert-backend.onrender.com/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

// API endpoints
export const endpoints = {
  // Device endpoints
  getDevices: () => api.get('/devices'),
  
  getDeviceDetails: (deviceId) => 
    api.get(`/devices/${deviceId}`),
  
  // Alert settings endpoints
  getAlertSettings: (deviceId) =>
    api.get(`/devices/${deviceId}/alerts`),
  
  updateAlertSettings: (deviceId, settings) =>
    api.put(`/devices/${deviceId}/alerts`, settings),
  
  // Readings endpoints
  getDeviceReadings: (deviceId, hours = 24) =>
    api.get(`/devices/${deviceId}/readings?hours=${hours}`),
  
  // Alert history endpoints
  getAlertHistory: (deviceId, days = 7) =>
    api.get(`/devices/${deviceId}/alert-history?days=${days}`),
  
  // Health check
  checkHealth: () => api.get('/health')
};

export default endpoints; 