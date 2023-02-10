import React, {useContext} from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import ToastShelf from "../ToastShelf";
import {ToastContext} from "../ToastProvider";

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];
const VARIANT_DEFAULT = 'notice';
const MESSAGE_DEFAULT = '';

function ToastPlayground() {

  const {toasts, addToast, removeToast} = useContext(ToastContext);
  const [message, setMessage] = React.useState(MESSAGE_DEFAULT);
  const [variant, setVariant] = React.useState(VARIANT_DEFAULT);


  const handleSubmit = (e) => {
    e.preventDefault();
    addToast(message, variant);
    setMessage(MESSAGE_DEFAULT);
    setVariant(VARIANT_DEFAULT);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png"/>
        <h1>Toast Playground</h1>
      </header>
      {
        toasts.length > 0 && (
          <ToastShelf toasts={toasts} removeToast={removeToast}>
          </ToastShelf>
        )
      }

      <form className={styles.controlsWrapper} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{alignSelf: 'baseline'}}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" className={styles.messageInput} value={message}
                      onChange={(e) => setMessage(e.target.value)}/>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {
              VARIANT_OPTIONS.map(variantOption => {
                return (
                  <label htmlFor={`variant-${variantOption}`} key={variantOption}>
                    <input
                      id={`variant-${variantOption}`}
                      type="radio"
                      name="variant"
                      value={variantOption}
                      checked={variant === variantOption}
                      onChange={(e) => setVariant(e.target.value)}
                    />
                    {variantOption}
                  </label>
                )
              })
            }
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}/>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
