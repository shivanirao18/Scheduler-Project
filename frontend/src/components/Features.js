import React from 'react'

export default function () {
    return (
        <div>
            <div className="container py-5">
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold">Key Features</h2>
                    <p className="lead text-muted">Everything you need to manage scheduled messages</p>
                </div>

                <div className="row g-4">
                    <div className="col-md-6 col-lg-3">
                        <div className="card h-100 border-0 shadow-sm">
                            <div className="card-body text-center">
                                <div className="bg-primary bg-gradient text-white rounded-circle d-inline-flex p-3 mb-3">
                                    <i className="bi bi-clock fs-4"></i>
                                </div>
                                <h3 className="h5 card-title">Message Scheduling</h3>
                                <p className="card-text">Users can compose messages and schedule them to be sent at a specific date and time.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card h-100 border-0 shadow-sm">
                            <div className="card-body text-center">
                                <div className="bg-primary bg-gradient text-white rounded-circle d-inline-flex p-3 mb-3">
                                    <i className="bi bi-clock fs-4"></i>
                                </div>
                                <h3 className="h5 card-title">Multi-Channel Support</h3>
                                <p className="card-text">Enable scheduling messages using various Devices.</p>
                            </div>
                        </div>
                    </div>  
                    
                    <div className="col-md-6 col-lg-3">
                        <div className="card h-100 border-0 shadow-sm">
                            <div className="card-body text-center">
                                <div className="bg-primary bg-gradient text-white rounded-circle d-inline-flex p-3 mb-3">
                                    <i className="bi bi-clock fs-4"></i>
                                </div>
                                <h3 className="h5 card-title">Effortless Scheduling</h3>
                                <p className="card-text">Set specific dates and times for message delivery with our intuitive interface.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card h-100 border-0 shadow-sm">
                            <div className="card-body text-center">
                                <div className="bg-primary bg-gradient text-white rounded-circle d-inline-flex p-3 mb-3">
                                    <i className="bi bi-clock fs-4"></i>
                                </div>
                                <h3 className="h5 card-title">Simple Message Composition</h3>
                                <p className="card-text">A straightforward text box for users to quickly type and send their message without too much complexity.</p>
                            </div>
                        </div>
                    </div>

                    {/* Repeat similar card structure for other features */}
                </div>
            </div>
        </div>
    )
}
