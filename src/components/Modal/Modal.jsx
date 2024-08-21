// Modal.js
import React from 'react';
import styles from "./Modal.module.css";
import { createPortal } from 'react-dom';

const Modal = ({ show, handleClose, children,title  }) => {
  return (
    createPortal(
    <div className={`${styles.modal} ${show ? styles.show : ''}`}>
      <div className={styles.modal_content}>
        <div className="d-flex align-items-center justify-content-between gap-5">
            <h4 className={styles.title}>{title}</h4>
            <span className={styles.close} onClick={handleClose}>x</span>
        </div><hr />

        {children}
      </div>
    </div>, document.body
    )
  );
};

export default Modal;