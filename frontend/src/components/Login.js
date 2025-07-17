import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successAlert, setSuccessAlert] = useState(false);

    const fetching = async (event) => {
        event.preventDefault(); // Prevent the form from reloading the page on submit

        try {
            const response = await fetch(`http://localhost:5000/api/user/login`, { 
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: pass
                })
            });

            const result = await response.json();

            if (!response.ok) {
                setError(true);
                setErrorMessage(result.error || 'Login failed. Please try again.');
            } else {
                setSuccessAlert(true); // Show success alert
                setTimeout(() => {
                    setSuccessAlert(false); // Hide the alert after 3 seconds
                }, 3000); // Delay navigation for 3 seconds
                navigate('/data', { state: { registeredEmail: email } });
 // Navigate after the alert
            }
        } catch (error) {
            setError(true);
            setErrorMessage('An error occurred. Please try again.');
        }
    };

    return (
        <div className="container my-5">
            <div className="card shadow-lg p-4">
                <h3 className="card-title text-center mb-4">Login</h3>
                {successAlert && (
                    <div className="alert alert-success" role="alert">
                        Logged in successfully!
                    </div>
                )}
                {/* Conditionally render the error alert */}
                {error && (
                    <div className="alert alert-danger" role="alert">
                        {errorMessage}
                    </div>
                )}

                <form onSubmit={fetching}>
                    <div className="form-floating mb-3">
                        <input
                            type="email"
                            className="form-control"
                            id="floatingInput2"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="floatingInput2">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="password"
                            className="form-control"
                            id="floatingPassword3"
                            placeholder="Password"
                            value={pass}
                            onChange={(e) => setPass(e.target.value)}
                        />
                        <label htmlFor="floatingPassword3">Password</label>
                    </div>
                    
                    <button type="submit" className="btn btn-primary w-100">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
