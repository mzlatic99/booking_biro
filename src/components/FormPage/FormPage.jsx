import styles from './FormPage.module.css';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function FormPage() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  };
  return (
    <div className={styles.formPage}>
      <span className={styles.cancel}>
        <Link to='/'>X</Link>
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
            />
          </label>
          <label>
            *Last name:
            <input
              type='text'
              name='lastname'
              value={inputs.lastname || ''}
              onChange={handleChange}
            />
          </label>
          <label>
            *Phone number:
            <input
              type='text'
              name='phonenumber'
              value={inputs.phonenumber || ''}
              onChange={handleChange}
            />
          </label>
          <label>
            *E-mail:
            <input
              type='email'
              name='email'
              value={inputs.email || ''}
              onChange={handleChange}
            />
          </label>
          <label>
            *Desired Artist:
            <input
              type='artist'
              name='artist'
              value={inputs.artist || ''}
              onChange={handleChange}
            />
          </label>
          <label>
            Comments:
            <input
              type='textarea'
              name='comments'
              value={inputs.comments || ''}
              onChange={handleChange}
            />
          </label>
          <button
            type='submit'
            className={styles.submitButton}>
            SUBMIT REQUEST
          </button>
        </form>
      </div>
    </div>
  );
}
