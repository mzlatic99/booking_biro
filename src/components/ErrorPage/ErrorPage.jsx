import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ErrorPage.module.css';

export default function ErrorPage() {
  return (
    <div className={styles.errorContainer}>
      <h1 className={styles.errorTitle}>Something went wrong!</h1>
      <p className={styles.errorMessage}>
        The page you are looking for does not exist.
      </p>
      <Link
        to={`${process.env.PUBLIC_URL}/`}
        className={styles.errorButton}>
        Go Back to Home
      </Link>
    </div>
  );
}
