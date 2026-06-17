import { useState } from 'react'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [response, setResponse] = useState({ text: '', type: '' })

  const handleSubmit = () => {
    if (!name || !email || !message) {
      setResponse({ text: '❌ Please fill in all fields.', type: 'error' })
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setResponse({ text: '❌ Please enter a valid email.', type: 'error' })
      return
    }

    setResponse({ text: `✅ Thanks ${name}! I'll get back to you soon.`, type: 'success' })
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <section id="contact" className="section">
      <h2>Contact Me</h2>
      <p>I'm open to freelance projects. Let's build something together!</p>
      <div className="form-group">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <textarea
          rows="5"
          placeholder="Your Message"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
      </div>
      <button className="submit-btn" onClick={handleSubmit}>
        Send Message
      </button>
      {response.text && (
        <p className={`form-response ${response.type}`}>{response.text}</p>
      )}
    </section>
  )
}

export default Contact