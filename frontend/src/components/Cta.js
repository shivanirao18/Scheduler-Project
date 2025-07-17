import React from 'react'

export default function Cta() {
    return (
        <div>
            <div className="bg-light py-5 mt-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <img
                                src=""
                                alt=""
                                className="img-fluid rounded shadow"
                            />
                        </div>
                        <div className="col-lg-6">
                            <h2 className="display-6 fw-bold mb-4">Start Scheduling Today</h2>
                            <p className="lead mb-4">
                                Whether you're managing marketing campaigns or planning personal messages,
                                our app helps you stay organized and ensures timely delivery.
                            </p>
                            {/* <div className="d-flex gap-3">
                                <button className="btn btn-primary btn-lg">Get Started</button>
                                <button className="btn btn-outline-primary btn-lg">Learn More</button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
