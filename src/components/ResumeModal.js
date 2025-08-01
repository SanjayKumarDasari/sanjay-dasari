import React, { useState } from 'react';
import './ResumeModal.css';

const ResumeModal = ({ open, onClose, onSubmit }) => {
  const [form, setForm] = useState({ name: '', email: '', purpose: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  if (!open) return null;

  return (
    <div className="resume-modal-overlay">
      <div className="resume-modal">
        <h3>Request Resume</h3>
        <form onSubmit={handleSubmit}>
          <input name="name" type="text" placeholder="Your Name" value={form.name} onChange={handleChange} required />
          <input name="email" type="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
          <input name="purpose" type="text" placeholder="Purpose" value={form.purpose} onChange={handleChange} required />
          <div className="modal-actions">
            <button type="submit">Send Request</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResumeModal;
