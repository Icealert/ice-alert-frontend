const express = require('express');
const cors = require('cors');
const { checkAndSendAlerts } = require('./emailService');

const app = express();
app.use(cors());
app.use(express.json());

// Store alert settings in memory (replace with database in production)
const alertSettingsStore = new Map();

// Endpoint to update alert settings
app.post('/api/alerts/settings/:deviceId', (req, res) => {
  try {
    const { deviceId } = req.params;
    const settings = req.body;
    alertSettingsStore.set(deviceId, settings);
    res.json({ success: true, message: 'Alert settings updated successfully' });
  } catch (error) {
    console.error('Error updating alert settings:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Endpoint to get alert settings
app.get('/api/alerts/settings/:deviceId', (req, res) => {
  try {
    const { deviceId } = req.params;
    const settings = alertSettingsStore.get(deviceId);
    if (!settings) {
      return res.status(404).json({ success: false, message: 'Settings not found' });
    }
    res.json({ success: true, settings });
  } catch (error) {
    console.error('Error getting alert settings:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Endpoint to process device data and send alerts
app.post('/api/alerts/check/:deviceId', async (req, res) => {
  try {
    const { deviceId } = req.params;
    const deviceData = req.body;
    const alertSettings = alertSettingsStore.get(deviceId);

    if (!alertSettings) {
      return res.status(404).json({ 
        success: false, 
        message: 'No alert settings found for device' 
      });
    }

    await checkAndSendAlerts(deviceData, alertSettings);
    res.json({ success: true, message: 'Alert check completed' });
  } catch (error) {
    console.error('Error checking alerts:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 