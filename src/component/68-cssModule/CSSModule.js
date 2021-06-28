import React from 'react';
import styles from './CSSModule.module.css';
const CSSModule = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        Hello, I am <span className="something">CSS Module!</span>
      </div>
      <div className={`${styles.wrapper} ${styles.inverted}`}>
        Hello, I am <span className="something">CSS Module!</span>
      </div>
    </div>
  );
};

export default CSSModule;
