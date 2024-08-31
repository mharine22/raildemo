import React from 'react';

const MedicalEmergency = () => {
  const handleEmergencyCall = () => {
    // Logic to initiate a call or show the emergency number
    alert('Calling emergency services...');
  };

  const handleLocationShare = () => {
    // Logic to share the current location with emergency services
    alert('Sharing your current location...');
  };

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h1>Medical Emergency</h1>
        <p>If you are in a medical emergency, please call for help immediately.</p>
      </div>

      <div style={styles.container}>
        <div style={styles.emergencySection}>
          <h2>Emergency Services</h2>
          <p>If you require urgent medical assistance, click the button below to call emergency services.</p>
          <button style={styles.emergencyButton} onClick={handleEmergencyCall}>
            Call Emergency Services
          </button>
        </div>

        <div style={styles.locationSection}>
          <h2>Share Your Location</h2>
          <p>You can share your current location with the medical team to get assistance faster.</p>
          <button style={styles.locationButton} onClick={handleLocationShare}>
            Share Location
          </button>
        </div>
      </div>

      <div style={styles.footer}>
        <p>Always stay calm and provide accurate information during an emergency.</p>
      </div>
    </div>
  );
};

const styles = {
  page: {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
    backgroundColor: '#f0f0f0',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  header: {
    backgroundColor: '#d9534f',
    color: 'white',
    textAlign: 'center',
    padding: '20px 0',
  },
  container: {
    padding: '20px',
    textAlign: 'center',
  },
  emergencySection: {
    marginBottom: '20px',
  },
  emergencyButton: {
    padding: '15px 30px',
    fontSize: '16px',
    color: 'white',
    backgroundColor: '#d9534f',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  locationSection: {
    marginBottom: '20px',
  },
  locationButton: {
    padding: '15px 30px',
    fontSize: '16px',
    color: 'white',
    backgroundColor: '#5bc0de',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  footer: {
    backgroundColor: '#d9534f',
    color: 'white',
    textAlign: 'center',
    padding: '10px 0',
  },
};

export default MedicalEmergency;
