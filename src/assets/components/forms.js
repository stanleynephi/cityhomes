import React, { useState } from 'react';

function Forms(props) {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload on form submission

    // Basic validation
    if (!firstname || !lastname || !subject || !message) {
      setError('All fields are required');
      return;
    }

    // Handle the submission logic here (e.g., send data to a backend)
    console.log({
      firstname,
      lastname,
      subject,
      message,
    });

    // Simulate successful form submission
    setSubmitted(true);
    setError(''); // Clear error if present
  };

  return (
    <div className={props.style}>
      <h1>Alternatively Send Us A Message</h1>

      {submitted ? (
        <div>
          <h2>Thank you, {firstname}!</h2>
          <p>Your message has been submitted successfully.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label>
              Firstname*{' '}
              <input
                type="text"
                name="user_firstname"
                id="user_firstname"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
            <label>
              Lastname*{' '}
              <input
                type="text"
                name="user_lastname"
                id="user_lastname"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>
          </fieldset>
          <fieldset>
            <label>
              Subject*{' '}
              <input
                type="text"
                name="subject"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}   
              />
            </label>
            <label>
              Message*{' '}
              <textarea
                name="message"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </label>
          </fieldset>
          {error && <p>{error}</p>}
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default Forms;
