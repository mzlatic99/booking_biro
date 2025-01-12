import React from 'react';
import { useRouteError, Link } from 'react-router-dom';
import styles from './ErrorPage.module.css';

export default function ErrorPage() {
  const error = useRouteError();
  console.error('Error captured by ErrorPage:', error);

  return (
    <div className={styles.errorContainer}>
      <h1 className={styles.errorTitle}>Something went wrong!</h1>
      <p className={styles.errorMessage}>
        {error?.statusText || error?.message || 'An unexpected error occurred.'}
      </p>
      <Link
        to='/'
        className={styles.errorButton}>
        Go Back to Home
      </Link>
    </div>
  );
}
