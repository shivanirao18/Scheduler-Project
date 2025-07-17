import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Data = () => {
    const [success, setSuccess] = useState(false);
    const [data, setData] = useState([]); // State to store fetched data
    const [error, setError] = useState(''); // State to store error message
    const location = useLocation();
    const { registeredEmail } = location.state || {}; // Access the passed email

    console.log(registeredEmail);

    // Function to format time to 12-hour format with date
    const formatDateAndTime = (timeString) => {
        const date = new Date(timeString);

        // Using Intl.DateTimeFormat to format both date and time
        return new Intl.DateTimeFormat('en-US', {
            weekday: 'long', // Full weekday (e.g., "Monday")
            year: 'numeric', // Full year (e.g., "2025")
            month: 'long', // Full month (e.g., "January")
            day: 'numeric', // Day of the month (e.g., "10")
            hour: 'numeric', // Hour in 12-hour format (e.g., "3")
            minute: 'numeric', // Minute (e.g., "30")
            hour12: true // 12-hour clock with AM/PM
        }).format(date);
    };

    useEffect(() => {
        const fetching = async () => {
            if (!registeredEmail) {
                setError('No email provided to fetch messages.');
                return;
            }

            try {
                const response = await fetch(`http://localhost:5000/api/message?sender=${registeredEmail}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                const result = await response.json();

                if (response.ok) {
                    if (result.length > 0) {
                        setData(result); // Store fetched data in state
                        setSuccess(true);
                        setTimeout(() => {
                            setSuccess(false); // Hide the alert after 3 seconds
                        }, 3000);
                    } else {
                        setError('No messages sent by this user.');
                    }
                } else {
                    setError(result.error || 'Failed to fetch messages.');
                }
            } catch (error) {
                setError('An error occurred while fetching messages.');
            }
        };

        fetching();
    }, [registeredEmail]); // Dependency array includes only registeredEmail

    return (
        <div className="container my-4">
            {/* Alert Message */}
            {success && (
                <div className="alert alert-success" role="alert">
                    Successfully Fetched
                </div>
            )}

            {/* Error Message */}
            {error && (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            )}

            {/* Render Cards or No Messages */}
            {!error && data.length === 0 && (
                <p className="text-center my-4">No messages available to display.</p>
            )}

            <div className="row">
                {data.map((item, index) => (
                    <div className="col-md-4 mb-3" key={index}>
                        <div className="card shadow">
                            <div className="card-body">
                                {/* Breadcrumb Indicator */}
                                <div className="d-flex justify-content-start mb-3">
                                    {/* If message is sent */}
                                    {item.sent ? (
                                        <span className="text-success" style={{ fontSize: '20px' }}>✔️</span>
                                    ) : (
                                        <span className="text-warning" style={{ fontSize: '20px' }}>🟠</span>
                                    )}
                                    <span className="ms-2" style={{ fontWeight: 'bold' }}>
                                        {item.sent ? 'Sent' : 'Scheduled'}
                                    </span>
                                </div>

                                {/* Message Content */}
                                <h5 className="card-title text-primary">Message {index + 1}</h5>
                                <p className="card-text"><strong>Receiver:</strong> {item.recipient}</p>
                                <p className="card-text"><strong>Message:</strong> {item.content}</p>

                                {/* Format and display scheduled time and date in 12-hour format */}
                                <p className="card-text">
                                    <strong>Date: </strong> 
                                    {item.scheduledTime ? formatDateAndTime(item.scheduledTime) : 'Not scheduled yet'}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Data;
