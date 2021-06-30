import React from 'react';
import classNames from 'classnames/bind';
import styles from './CSSModule.module.css';

const cx = classNames.bind(styles);

const ClassnameCssModule = () => {
  return (
    <div className={cx('wrapper', 'inverted')}>
      Hi, I am <span className="something">CSS Module!</span>
    </div>
  )
}


export default ClassnameCssModule;
