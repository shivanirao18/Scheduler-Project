import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Footer() {
    const navigate = useNavigate()
    const handleclick = ()=>{
        navigate('/signup')
    }
    return (
        <div>
            <footer className="bg-dark text-white py-4 mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h5 className="mb-3">Scheduled Messaging App</h5>
                            <p className="mb-0">Automating communication for better efficiency</p>
                        </div>
                        <div className="col-md-6 text-md-end">
                            <button className="btn btn-outline-light me-2">Contact Us</button>
                            <button className="btn btn-primary" onClick={handleclick}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
