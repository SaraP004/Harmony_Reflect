import React from 'react';

const NotificationComponent = ({ message }) => {
  return (
    <div style={{ position: 'fixed', top: '20px', right: '20px', backgroundColor: 'white', padding: '10px', border: '1px solid black' }}>
      <p>{message}</p>
    </div>
  );
};

export default NotificationComponent;
