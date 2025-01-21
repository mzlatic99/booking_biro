import React, { useEffect } from 'react';
import styles from './FormPage.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';

export default function FormPage() {
  const [inputs, setInputs] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Disable scrolling
    document.body.style.overflow = 'hidden';

    // Disable zooming
    const preventZoom = (event) => {
      if (event.ctrlKey || event.touches?.length > 1) {
        event.preventDefault();
      }
    };

    const preventGesture = (event) => event.preventDefault();

    document.addEventListener('wheel', preventZoom, { passive: false });
    document.addEventListener('gesturestart', preventGesture, {
      passive: false,
    });
    document.addEventListener('gesturechange', preventGesture, {
      passive: false,
    });
    document.addEventListener('gestureend', preventGesture, { passive: false });
    document.addEventListener('touchmove', preventZoom, { passive: false });

    return () => {
      // Cleanup: Remove event listeners and reset styles
      document.body.style.overflow = 'auto';
      document.removeEventListener('wheel', preventZoom);
      document.removeEventListener('gesturestart', preventGesture);
      document.removeEventListener('gesturechange', preventGesture);
      document.removeEventListener('gestureend', preventGesture);
      document.removeEventListener('touchmove', preventZoom);
    };
  }, []);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const emailData = {
      firstname: inputs.firstname || '',
      lastname: inputs.lastname || '',
      phonenumber: inputs.phonenumber || '',
      email: inputs.email || '',
      artist: inputs.artist || '',
      comments: inputs.comments || '',
    };

    emailjs
      .send(
        process.env.REACT_APP_FORM_SERVICE_ID,
        process.env.REACT_APP_FORM_TEMPLATE_ID,
        emailData,
        process.env.REACT_APP_FORM_PUBLIC_KEY
      )
      .then(
        () => {
          setMessage('Your request has been sent successfully!');
          setIsSubmitting(false);
        },
        (error) => {
          setMessage(
            'There was an error sending your request. Please try again. ' +
              error
          );
          console.error(error);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div className={styles.formPage}>
      <span className={styles.cancel}>
        <Link to={`${process.env.PUBLIC_URL}/`}>X</Link>
      </span>
      <div className={styles.form}>
        <form onSubmit={handleSubmit}>
          <label>
            *First name:
            <input
              type='text'
              name='firstname'
              value={inputs.firstname || ''}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            *Last name:
            <input
              type='text'
              name='lastname'
              value={inputs.lastname || ''}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            *Phone number:
            <input
              type='text'
              name='phonenumber'
              value={inputs.phonenumber || ''}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            *E-mail:
            <input
              type='email'
              name='email'
              value={inputs.email || ''}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            *Desired Artist:
            <input
              type='text'
              name='artist'
              value={inputs.artist || ''}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Comments:
            <br></br>
            <textarea
              name='comments'
              value={inputs.comments || ''}
              onChange={handleChange}
            />
          </label>
          <button
            type='submit'
            className={styles.submitButton}
            disabled={isSubmitting}>
            {isSubmitting ? 'SENDING...' : 'SUBMIT REQUEST'}
          </button>
        </form>
        {message && <p className={styles.message}>{message}</p>}
      </div>
    </div>
  );
}
