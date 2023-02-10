import React from "react";
import {useEscapeKey} from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext({});

function ToastProvider({children}) {

  const [toasts, setToasts] = React.useState([]);
  useEscapeKey(() => setToasts([]))

  const removeToast = React.useCallback((id) => {
    const newToasts = toasts.filter(toast => toast.id !== id);
    setToasts(newToasts);
  }, [toasts])

  const addToast = React.useCallback((message, variant) => {
    const newToasts = [...toasts, {message, variant, id: crypto.randomUUID()}];
    setToasts(newToasts);
  }, [toasts])


  const value = React.useMemo(() => {
    return {
      toasts,
      addToast,
      removeToast,
    }
  },[toasts, addToast, removeToast]);


  return (
    <ToastContext.Provider value={value}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
