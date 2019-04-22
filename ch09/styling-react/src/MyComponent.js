import React from 'react';
import classNames from 'classnames/bind';
import styles from './CSSModule.module.scss';

const cx = classNames.bind(styles);

/* 
  classNames('one', 'two');  // 'one two'
  classNames('one', { two: true });  // 'one two'
  classNames('one', { two: false }); // 'one'
  classNames('one', ['two', 'three']); // 'one two three'

  const myClass = 'hello';
  classNames('one', myClass, { myCondition: true }); // 'one hello myCondition' 
*/

const MyComponent = ({ isInverted, theme }) => {
  return (
    <div className={cx('wrapper', { 'inverted' : isInverted } )}>
      Hello <span className={cx(theme)}>React</span>
    </div>
  )
}

export default MyComponent;