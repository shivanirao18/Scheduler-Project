import React from 'react';

export default function Procedure() {
  return (
    // <div className="container"></div>
    <div className="container d-flex justify-content-center align-items-center py-5">
      <div className="card shadow-lg p-4 w-75 w-md-50">
        <h3 className="card-title text-center mb-4 text-primary">Procedure for Setup</h3>

        <div className="step mb-3">
          <h5 className="text-primary">Step 1: Enable 2-Factor Authentication</h5>
          <p>In the very first step, the user needs to enable 2-factor authentication for enhanced security.</p>
        </div>

        <div className="step mb-3">
          <h5 className="text-primary">Step 2: Search for App Passwords</h5>
          <p>User now needs to search for and generate app passwords from their account settings.</p>
        </div>

        <div className="step mb-3">
          <h5 className="text-primary">Step 3: Create an App Named Nodemailer</h5>
          <p>Create an app called 'Nodemailer' to generate the app-specific password needed for secure communication.</p>
        </div>

        <div className="step mb-3">
          <h5 className="text-primary">Step 4: Enter the Password</h5>
          <p>Now enter the password that you received while scheduling the message to complete the setup.</p>
        </div>
      </div>
    </div>
  );
}
