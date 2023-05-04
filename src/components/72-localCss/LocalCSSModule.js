import React from 'react';
import styles from './localCSSModule.css';
import styless from './localCSSModule.scss';

const LocalCSSModule = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        Hello, I am <span className={styles.something}>CSS Module!</span>
      </div>
      <div className={`${styles.wrapper} ${styles.inverted}`}>
        Hello, I am <span className={styles.something}>CSS Module!</span>
      </div>
      <div className={`${styles.wrapper} ${styles.inverted}`}>
        Hello, I am <span className={styless.something}>CSS Module!</span>
      </div>
    </div>
  );
};

export default LocalCSSModule;
