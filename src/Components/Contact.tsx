import React from 'react';
import '../css/Contact.css';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim();

    const errors: string[] = [];

    if (!name) errors.push('Name is required.');
    if (!email ||test(email)) {
      errors.push('Valid email is required.');
    }
    if (!message) errors.push('Message is required.');

    if (errors.length > 0) {
      alert('Errors:\\n' + errors.join('\\n'));
    } else {
      alert('Form is valid (not submitted).');
    }
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} noValidate>
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <textarea name="message" placeholder="Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
