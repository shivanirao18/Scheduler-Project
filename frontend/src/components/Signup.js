import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const [pass, setPass] = useState('');
    const [email, setEmail] = useState('');
    const [conPass, setConPass] = useState('');
    const [Name, setName] = useState('');
    const [successAlert, setSuccessAlert] = useState(false); // State for success alert
    const [errorAlert, setErrorAlert] = useState(''); // State for error alert
    const navigate = useNavigate();

    const posting = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/user/signup", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: Name,
                    email: email,
                    password: pass,
                }),
            });

            const data = await response.json();
            if (response.ok) {
                setSuccessAlert(true); // Show success alert
                setTimeout(() => {
                    setSuccessAlert(false); // Hide the alert after 3 seconds
                }, 3000);
                console.log('User created successfully:', data);
                navigate('/data', { state: { registeredEmail: email } });
            } else {
                setErrorAlert(data.error || 'Unknown error');
            }
        } catch (error) {
            console.error('Error during fetch:', error);
            setErrorAlert('An unexpected error occurred. Please try again.');
        }
    };

    const handleClick = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        // Validate the form inputs
        if (!email.includes('@')) {
            alert('Please enter a valid email address.');
            return;
        }

        if (pass.length < 6) {
            alert('Password must be at least 6 characters long.');
            return;
        }

        if (pass !== conPass) {
            alert('Passwords do not match.');
            return;
        }

        await posting(); // Call posting function after validation
    };

    return (
        <div className="container my-5">
            <div className="card shadow-lg p-4">
                <h3 className="card-title text-center mb-4">Signup</h3>

                {/* Conditionally render success and error alerts */}
                {successAlert && (
                    <div className="alert alert-success" role="alert">
                        User created successfully!
                    </div>
                )}
                {errorAlert && (
                    <div className="alert alert-danger" role="alert">
                        {errorAlert}
                    </div>
                )}

                <form onSubmit={handleClick}>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingInput1"
                            placeholder="UserName"
                            value={Name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label htmlFor="floatingInput1">User Name</label>
                    </div>
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
                    <div className="form-floating mb-3">
                        <input
                            type="password"
                            className="form-control"
                            id="floatingConfirmPassword"
                            placeholder="Confirm Password"
                            value={conPass}
                            onChange={(e) => setConPass(e.target.value)}
                        />
                        <label htmlFor="floatingConfirmPassword">Confirm Password</label>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
