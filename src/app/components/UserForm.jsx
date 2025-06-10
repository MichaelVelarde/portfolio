'use client';

import { useState } from 'react';
import { Send, CheckCircle, AlertTriangle } from 'lucide-react'; // Icons

export default function UserForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '', 
    message: '',
    state: ''
  });

  const [status, setStatus] = useState({
    submitted: false,
    error: null,
    loading: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitted: false, error: null, loading: true });

    // Basic client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ submitted: false, error: "Please fill in all required fields: Name, Email, and Message.", loading: false });
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setStatus({ submitted: false, error: "Please enter a valid email address.", loading: false });
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone, 
          message: formData.message,
          state : formData.state
        }),
      });

      if (res.ok) {
        setStatus({ submitted: true, error: null, loading: false });
        setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form
      } else {
        const errorData = await res.json().catch(() => ({ message: "Failed to send message. Please try again." }));
        setStatus({ submitted: false, error: errorData.message || "Failed to send message. Server error.", loading: false });
      }
    } catch (error) {
      console.error("Contact form submission error:", error);
      setStatus({ submitted: false, error: "An unexpected error occurred. Please try again.", loading: false });
    }
  };

  // Input field configuration
  const formFields = [
    { label: 'Full Name', name: 'name', type: 'text', placeholder: 'Your Name', required: true },
    { label: 'Email Address', name: 'email', type: 'email', placeholder: 'your.email@example.com', required: true },
    { label: 'Phone Number (Optional)', name: 'phone', type: 'tel', placeholder: '(123) 456-7890', required: false },
  ];

  return (
    <div className="bg-white dark:bg-slate-800 p-6 sm:p-10 rounded-xl shadow-2xl">
      {/* The h1 from the original form is removed as the page now has a main header */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {formFields.map(({ label, name, type, placeholder, required }) => (
          <div key={name}>
            <label htmlFor={name} className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
              {label}
            </label>
            <input
              id={name}
              name={name}
              type={type}
              value={formData[name]}
              onChange={handleChange}
              placeholder={placeholder}
              required={required}
              className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 rounded-lg shadow-sm
                         text-slate-900 dark:text-slate-50 placeholder-slate-400 dark:placeholder-slate-500
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                         transition duration-150 ease-in-out"
            />
          </div>
        ))}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="state">State</label>
          <input
            type="text"
            id="state"
            name="state"
            tabIndex="-1"
            autoComplete="off"
            onChange={handleChange} // You can still use your handler
            value={formData.state || ''}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            minLength={10}
            maxLength={2000}
            value={formData.message}
            onChange={handleChange}
            placeholder="How can I help you today?"
            required
            className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 rounded-lg shadow-sm
                       text-slate-900 dark:text-slate-50 placeholder-slate-400 dark:placeholder-slate-500
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                       transition duration-150 ease-in-out resize-y"
          />
        </div>

        <button
          type="submit"
          disabled={status.loading}
          className="w-full flex items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 
                     text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-800
                     transition-all duration-150 ease-in-out disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status.loading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            <>
              <Send size={18} className="mr-2" />
              Send Message
            </>
          )}
        </button>
      </form>

      {status.submitted && (
        <div className="mt-6 p-4 flex items-start bg-green-50 dark:bg-green-700/30 border border-green-300 dark:border-green-600 rounded-lg text-green-700 dark:text-green-300">
          <CheckCircle size={20} className="mr-3 mt-0.5 flex-shrink-0 text-green-500 dark:text-green-400" />
          <div>
            <h4 className="font-semibold">Message Sent!</h4>
            <p className="text-sm">Thank you for reaching out. I'll get back to you as soon as possible.</p>
          </div>
        </div>
      )}
      {status.error && (
         <div className="mt-6 p-4 flex items-start bg-red-50 dark:bg-red-700/30 border border-red-300 dark:border-red-600 rounded-lg text-red-700 dark:text-red-300">
          <AlertTriangle size={20} className="mr-3 mt-0.5 flex-shrink-0 text-red-500 dark:text-red-400" />
          <div>
             <h4 className="font-semibold">Submission Error</h4>
            <p className="text-sm">{status.error}</p>
          </div>
        </div>
      )}
    </div>
  );
}