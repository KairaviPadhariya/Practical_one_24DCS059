import { useState } from "react";

function Contact() {
  // useState #1 — controlled form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // useState #2 — toggle help tooltip visibility
  const [showTooltip, setShowTooltip] = useState(false);

  // useState #3 — submission feedback
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", message: "" });
    setSubmitted(false);
  };

  return (
    <main className="content">
      <h1 className="page-title">Get In Touch</h1>
      <p className="page-subtitle">
        Have a project idea or just want to say hi? Fill in the form below and
        I'll get back to you.
      </p>

      {submitted ? (
        <div className="success-card">
          <div className="success-icon">✓</div>
          <h2>Message Received!</h2>
          <p>
            Thanks <strong>{formData.name}</strong>! I'll reply to{" "}
            <strong>{formData.email}</strong> soon.
          </p>
          <p className="preview-message">
            Your message: <em>"{formData.message}"</em>
          </p>
          <button className="btn-primary" onClick={handleReset}>
            Send Another Message
          </button>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          {/* Name */}
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              className="form-input"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="form-input"
              placeholder="[EMAIL_ADDRESS]"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Message with tooltip toggle */}
          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Message
              <button
                type="button"
                className="tooltip-trigger"
                aria-label="Show message help"
                onClick={() => setShowTooltip((prev) => !prev)}
              >
                ?
              </button>
            </label>

            {/* useState #2 in action — toggles help tooltip */}
            {showTooltip && (
              <div className="tooltip-box" role="tooltip">
                💡 Tell me about your project, collaboration idea, or just say
                hello. I read every message!
              </div>
            )}

            <textarea
              id="message"
              name="message"
              className="form-input form-textarea"
              placeholder="Your message here…"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          {/* Live preview — shows controlled state updating in real time */}
          {formData.message && (
            <div className="live-preview">
              <span className="live-preview-label">Live preview:</span>{" "}
              {formData.message}
            </div>
          )}

          <button type="submit" className="btn-primary btn-submit">
            Send Message
          </button>
        </form>
      )}
    </main>
  );
}

export default Contact;
