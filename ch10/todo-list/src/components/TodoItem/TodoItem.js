import React, { Component } from 'react';
import styles from './TodoItem.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class TodoItem extends Component {
  render() {
    const { done, children, onToggle, onRemove } = this.props;
    /*
      앞 코드에서 비구조화 할당을 이용하여 this.props 안에 있는
      done, children, onToggle, onRemove 레퍼런스를 생성 
     */
    return (
      <div className={cx('todo-item')} onClick={onToggle}>
        <input className={cx('tick')} type="checkbox" checked={done} readOnly />
        <div className={cx('text', {done})}>{children}</div>
        <div className={cx('delete')} onClick={(e) => {
          onRemove();
          e.stopPropagation();
        }}>[지우기]</div>
      </div>
    );
  }
}

export default TodoItem;