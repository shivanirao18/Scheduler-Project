import React, { useState} from 'react';
import {useNavigate} from 'react-router-dom'
export default function Sendmssg() {
  const [email, setEmail] = useState('');
  const [reciever, setReciever] = useState('');

  const [password, setPassword] = useState('');
  const [content, setContent] = useState('');
  const [scheduledTime, setScheduledTime] = useState('');
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();

    

    try {
      const response = await fetch('http://localhost:5000/api/message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            sender:email,
      recipient:reciever,
      nodepass:password,
      content:content,
      scheduledTime:scheduledTime
        }),
      });

      if (response.ok) {
        navigate('/data',{state:{registeredEmail:email}})
        console.log('Message scheduled successfully');
      } else {
        console.log('Error scheduling message');
      }
    } catch (error) {
      console.error('Error sending data to server:', error);
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Schedule Message</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Recipient Mail</label>
          <input
            type="email"
            className="form-control"
            value={reciever}
            onChange={(e) => setReciever(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">NodeMailer Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Message Content</label>
          <textarea
            className="form-control"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Scheduled Time(yyyy-mm-ddThrs:min:00)</label>
          <input
            type="text"
            className="form-control"
            value={scheduledTime}
            onChange={(e) => setScheduledTime(e.target.value)}
            required
          />
        </div>
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary">Schedule Message</button>
        </div>
      </form>
    </div>
  );
}
