import React from 'react';

const NearbyTransport = () => {
  const handleGetDirections = (transportName) => {
    // Logic to get directions (e.g., opening Google Maps with directions)
    alert(`Getting directions to ${transportName}...`);
  };

  const handleCallService = (transportName) => {
    // Logic to call the transport service (e.g., opening the dialer with the service number)
    alert(`Calling ${transportName} service...`);
  };

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h1>Nearby Public Transport</h1>
        <p>Find public transport services near Central Railway Station</p>
      </div>

      <div style={styles.container}>
        <div style={styles.transportOption}>
          <h2>Central Bus Stop</h2>
          <p>Location: Near Railway Station, 200 meters away</p>
          <button style={styles.button} onClick={() => handleGetDirections('Central Bus Stop')}>
            Get Directions
          </button>
          <button style={styles.callButton} onClick={() => handleCallService('Central Bus Stop')}>
            Call Service
          </button>
        </div>

        <div style={styles.transportOption}>
          <h2>Metro Station</h2>
          <p>Location: Park Town, 500 meters away</p>
          <button style={styles.button} onClick={() => handleGetDirections('Metro Station')}>
            Get Directions
          </button>
          <button style={styles.callButton} onClick={() => handleCallService('Metro Station')}>
            Call Service
          </button>
        </div>

        <div style={styles.transportOption}>
          <h2>Taxi Stand</h2>
          <p>Location: Station Road, 100 meters away</p>
          <button style={styles.button} onClick={() => handleGetDirections('Taxi Stand')}>
            Get Directions
          </button>
          <button style={styles.callButton} onClick={() => handleCallService('Taxi Stand')}>
            Call Taxi Service
          </button>
        </div>
      </div>

      <div style={styles.footer}>
        <p>Plan your travel in advance and stay safe!</p>
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
    backgroundColor: '#007bff',
    color: 'white',
    textAlign: 'center',
    padding: '20px 0',
  },
  container: {
    padding: '20px',
    textAlign: 'center',
  },
  transportOption: {
    backgroundColor: '#ffffff',
    padding: '15px',
    marginBottom: '20px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    color: 'white',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '10px',
  },
  callButton: {
    padding: '10px 20px',
    fontSize: '16px',
    color: 'white',
    backgroundColor: '#28a745',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  footer: {
    backgroundColor: '#007bff',
    color: 'white',
    textAlign: 'center',
    padding: '10px 0',
  },
};

export default NearbyTransport;