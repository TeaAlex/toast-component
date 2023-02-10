import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import {ToastContext} from "../ToastProvider";

function ToastShelf() {
  const {toasts, removeToast} = React.useContext(ToastContext);
  return (
    <ol className={styles.wrapper}
        role="region"
        aria-live="assertive"
        aria-label="Notification"
    >
      {toasts.map(toast => {
        return (
          <li className={styles.toastWrapper} key={toast.id}>
            <Toast id={toast.id} variant={toast.variant} onClose={removeToast}>{toast.message}</Toast>
          </li>
        )
      })}
    </ol>
  );
}

export default ToastShelf;
